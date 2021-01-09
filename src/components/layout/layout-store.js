import { createSlice } from '@reduxjs/toolkit'

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    screenSize: 'mobile',
  },
  reducers: {
    updateDimensions: (state, action) => {
      const { screenSize } = action.payload
      state.screenSize = screenSize
    }
  }
})

export const { updateDimensions } = layoutSlice.actions

export default layoutSlice.reducer
