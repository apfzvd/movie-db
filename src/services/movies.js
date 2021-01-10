import { http } from '../config/api'

export const movies = {
  getDiscover() {
    return http.get('/discover/movie')
  },
  getUpcoming() {
    return http.get('/movie/upcoming')
  },
  getTopRated() {
    return http.get('movie/top_rated')
  },
  getNowPlaying() {
    return http.get('/movie/now_playing')
  },
  getLatest() {
    return http.get('/movie/latest')
  },
  getDetails(filmId) {
    return http.get(`/movie/${filmId}`)
  },
  getSimilar(filmId) {
    return http.get(`/movie/${filmId}/similar`)
  },
  getCrew(filmId) {
    return http.get(`/movie/${filmId}/credits`)
  },
  getVideos(filmId) {
    return http.get(`/movie/${filmId}/videos`)
  },
  getSearchMovie(query) {
    return http.get(`/search/movie`, { params: { query } })
  },
}
