import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { movies } from '../../services/movies'

export const fetchFilmDetails = createAsyncThunk(
  'film/fetchFilmDetails',
  async (filmId) => {
    const response = await movies.getDetails(filmId)
    return response
  }
)

export const fetchCrew = createAsyncThunk('film/fetchCrew', async (filmId) => {
  const response = await movies.getCrew(filmId)
  return response
})

export const fetchVideos = createAsyncThunk(
  'film/fetchVideos',
  async (filmId) => {
    const response = await movies.getVideos(filmId)
    return response
  }
)

const filmSlice = createSlice({
  name: 'film',
  initialState: {
    details: {
      loading: true,
      data: {
        genres: [],
      },
    },
    videos: {
      loading: false,
      data: [],
    },
  },
  reducers: {},
  extraReducers: {
    [fetchFilmDetails.loading]: (state) => {
      state.details.loading = true
    },
    [fetchFilmDetails.fulfilled]: (state, action) => {
      state.details.loading = false
      state.details.data = action.payload.data
      state.details.data.genres = action.payload.data.genres.map(
        (genre) => genre.name
      )
    },
    [fetchFilmDetails.rejected]: (state) => {
      state.details.loading = false
    },

    [fetchVideos.loading]: (state) => {
      state.videos.loading = true
    },
    [fetchVideos.fulfilled]: (state, action) => {
      state.videos.loading = false
      state.videos.data = action.payload.data.results
    },
    [fetchVideos.rejected]: (state) => {
      state.videos.loading = false
    },
  },
})

// export const { } = filmSlice.actions

export default filmSlice.reducer
