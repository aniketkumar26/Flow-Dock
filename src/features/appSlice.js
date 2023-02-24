import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  channelId: null
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterChannel: (state, action) => {
      state.channelId = action.payload.channelId
    }
  }
})

export const { enterChannel } = appSlice.actions

export const selectChannelId = state => state.app.channelId

export default appSlice.reducer
