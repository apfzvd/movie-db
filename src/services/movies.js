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
  getDetails(filmId) {
    return http.get(`/movie/${filmId}`)
  },
  getSimilar(filmId) {
    return http.get(`/movie/${filmId}/similar`)
  },
  getCrew(filmId) {
    return http.get(`/movie/${filmId}/credits`)
  },
  getReleaseDates(filmId) {
    return http.get(`/movie/${filmId}/release_dates`)
  },
  getVideos(filmId) {
    return http.get(`/movie/${filmId}/videos`)
  },
  getSearchMovie(query) {
    return http.get(`/search/movie`, { params: { query } })
  },
}
