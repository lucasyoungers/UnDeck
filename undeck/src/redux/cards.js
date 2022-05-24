import { createSlice } from "@reduxjs/toolkit"

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: []
  },
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload
    },
    addCards: (state, action) => {
      state.cards = [].concat(state.cards, action.payload)
    }
  }
})

export const { setCards, addCards } = cardsSlice.actions
export default cardsSlice.reducer