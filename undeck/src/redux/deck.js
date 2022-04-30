import { createSlice } from "@reduxjs/toolkit"

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

const compareFunction = function(card1, card2) {
  if (card1.supertype !== card2.supertype) return C_TABLE.supertype[card1.supertype];
  if (card1.types && card2.types && card1.types[0] !== card2.types[0]) return C_TABLE.type[card1.types[0]] - C_TABLE.type[card2.types[0]];
  if (card1.subtypes && card2.subtypes) {
    if (card1.supertype === "Trainer") return C_TABLE.trainer[card1.subtypes[0]];
    if (card1.supertype === "Energy") return C_TABLE.energy[card1.subtypes[0]];
  }
  if (card1.name > card2.name) return 1;
  if (card1.name < card2.name) return -1;
  return 0;
}

export const deckSlice = createSlice({
  name: "deck",
  initialState: {
    deck: []
  },
  reducers: {
    setDeck: (state, action) => {
      state.deck = action.payload
      state.deck.sort(compareFunction)
    },
    addToDeck: (state, action) => {
      state.deck.push(action.payload)
      state.deck.sort(compareFunction)
    }
  }
})

export const { setDeck } = deckSlice.actions
export default deckSlice.reducer