import { createSlice } from "@reduxjs/toolkit"

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: []
  },
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload
      state.cards.sort(() => Math.random() - 0.5)
    }
  }
})

export const { setCards } = cardsSlice.actions
export default cardsSlice.reducer