import { configureStore } from "@reduxjs/toolkit"
import cardsReducer from "./cards"
import deckReducer from "./deck"
import modalReducer from "./modal"

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    deck: deckReducer,
    modal: modalReducer
  }
})

export default store