import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { movies } from '../../services/movies'

export const getTopRated = createAsyncThunk('movies/getTopRated', async () => {
  const response = await movies.topRated()
  return response.data
})

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    topRated: [],
    loading: false,
  },
  reducers: {
    example: (state, action) => {
      //  use immer
    }
  },
  extraReducers: {
    [getTopRated.fulfilled]: (state, action) => {
      state.topRated = action.payload.results;
    }
  }
})

export const { example } = movieSlice.actions

export default movieSlice.reducer
