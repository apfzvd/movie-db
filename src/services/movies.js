import { http } from '../config/api'

export const movies = {
  getDiscover() {
    return http.get('/discover/movie')
  },
  getUpcoming() {
    return http.get('/movie/upcoming')
  },
  getTopRated() {
    // vote_average
    return http.get('movie/top_rated')
  },
  // details
  getDetails({ movie_id } = {}) {
    return http.get(`/movie/${movie_id}`)
  },
  getSimilar(movie_id) {
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
