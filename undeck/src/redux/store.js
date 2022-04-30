import { configureStore } from "@reduxjs/toolkit"
import cardsReducer from "./cards"
import deckReducer from "./deck"

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    deck: deckReducer
  }
})

export default store