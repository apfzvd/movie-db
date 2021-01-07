import axios from 'axios'

// image url https://image.tmdb.org/t/p/w500/

export const http = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: '703826047b45d9aadade1d3e5329571e',
    language: 'pt-BR',
  },
})
