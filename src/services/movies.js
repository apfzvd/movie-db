import { http } from '../config/api'

export const movies = {
  getDiscover({ page = 1 } = {}) {
    return http.get('/discover/movie', { params: { page } })
  },
  getUpcoming({ page = 1 } = {}) {
    return http.get('/movie/upcoming', { params: { page } })
  },
  getTopRated({ page = 1 } = {}) {
    // vote_average
    return http.get('movie/top_rated', { params: { page } })
  },
  // details
  getDetails({ movie_id } = {}) {
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
  },
}
