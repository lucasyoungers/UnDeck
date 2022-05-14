import { createSlice } from "@reduxjs/toolkit"

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    type: "",
    card: {}
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload
    },
    setCard: (state, action) => {
      state.card = action.payload
    }
  }
})

export const { setType, setCard } = modalSlice.actions
export default modalSlice.reducer