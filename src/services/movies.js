import { http } from '../config/api'

export const movies = {
  list: {
    getTopRated({ page = 1 } = {}) {
      // vote_average
      return http.get('movie/top_rated', { params: { page } })
    },
    getTopLoved({ page = 1 } = {}) {
      // popularity
      return http.get('movie/popular', { params: { page } })
    },
    getNowPlaying({ page = 1 } = {}) {
     return http.get('movie/now_playing', { params: { page } })
    },
  },
  details: {
    get({ movie_id } = {}) {
      return http.get(`/movie/${movie_id}`)
    },
    getSimilar({ movie_id } = {}) {
      return http.get(`/movie/${movie_id}/similar`)
    },
    getCrew({ movie_id } = {}) {
      return http.get(`/movie/${movie_id}/credits`)
    },
    getReleaseDates({ movie_id } = {}) {
      return http.get(`/movie/${movie_id}/release_dates`)
    },
    getVideos({ movie_id } = {}) {
      return http.get(`/movie/${movie_id}/videos`)
    }
  }
}
