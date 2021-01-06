import { http } from '../config/api'

export const movies = {
  topRated({ page = 1 } = {}) {
    return http.get('movie/top_rated', { params: { page } })
  },
}
