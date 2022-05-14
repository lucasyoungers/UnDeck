import { createSlice } from "@reduxjs/toolkit"
import { addToLocalDeck, removeFromLocalDeck, deleteLocalDeck } from "../utils"

const C_TABLE = {
  supertype: {
    Pokémon:   -1,
    Trainer:    0,
    Energy:     1
  },
  type: {
    Grass:     -5,
    Fire:      -4,
    Water:     -3,
    Lightning: -2,
    Psychic:   -1,
    Fighting:   0,
    Darkness:   1,
    Metal:      2,
    Fairy:      3,
    Dragon:     4,
    Colorless:  5
  },
  trainer: {
    Supporter: -1,
    Item:       0,
    Stadium:    1
  },
  energy: {
    Special:   -1,
    Basic:      1
  }
}

const compareFunction = function(cardData1, cardData2) {
  const card1 = cardData1[0]
  const card2 = cardData2[0]
  if (card1.supertype !== card2.supertype) return C_TABLE.supertype[card1.supertype]
  if (card1.types && card2.types && card1.types[0] !== card2.types[0]) return C_TABLE.type[card1.types[0]] - C_TABLE.type[card2.types[0]]
  if (card1.subtypes && card2.subtypes) {
    if (card1.supertype === "Trainer") return C_TABLE.trainer[card1.subtypes[0]]
    if (card1.supertype === "Energy") return C_TABLE.energy[card1.subtypes[0]]
  }
  if (card1.name > card2.name) return 1
  if (card1.name < card2.name) return -1
  return 0;
}

export const deckSlice = createSlice({
  name: "deck",
  initialState: {
    deck: [],
    count: 0,
    supertypes: {
      Pokémon: 0,
      Trainer: 0,
      Energy: 0
    }
  },
  reducers: {
    setDeck: (state, action) => {
      let deck = []
      let count = 0
      let supertypes = {
        Pokémon: 0,
        Trainer: 0,
        Energy: 0
      }
      for (let card of action.payload) {
        for (let i = 0; i < deck.length; i++) {
          if (deck[i][0].id === card.id) {
            deck[i][1]++
            break
          }
        }
        if (!deck.some(x => x[0].id === card.id)) deck.push([card, 1])
        count++
        supertypes[card.supertype]++
      }
      state.deck = deck
      state.count = count
      state.supertypes = supertypes
      state.deck.sort(compareFunction)
    },
    addToDeck: (state, action) => {
      const card = action.payload
      addToLocalDeck(card.id)
      for (let i = 0; i < state.deck.length; i++) {
        if (state.deck[i][0].id === card.id) {
          state.deck[i][1]++
          break
        }
      }
      if (!state.deck.some(x => x[0].id === card.id)) state.deck.push([card, 1])
      state.count++
      state.supertypes[card.supertype]++
      state.deck.sort(compareFunction)
    },
    removeFromDeck: (state, action) => {
      const card = action.payload
      removeFromLocalDeck(card.id)
      for (let i = 0; i < state.deck.length; i++) {
        if (state.deck[i][0].id === card.id) {
          state.deck[i][1]--
          if (state.deck[i][1] === 0) state.deck.splice(i, 1)
          state.count--
          state.supertypes[card.supertype]--
          break
        }
      }
    },
    deleteDeck: state => {
      deleteLocalDeck()
      state.deck = []
      state.count = 0
      state.supertypes = {
        Pokémon: 0,
        Trainer: 0,
        Energy: 0
      }
    }
  }
})

export const { setDeck, addToDeck, removeFromDeck, deleteDeck } = deckSlice.actions
export default deckSlice.reducer