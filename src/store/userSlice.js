import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload.name
    },
  },
})

export const { updateName } = userSlice.actions

export default userSlice.reducer
