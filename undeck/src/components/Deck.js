// Libraries
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Utils
import { setDeck } from "../redux/deck";
import { getDeck } from "../utils";

// Components
import "./css/Deck.css";
import DeckCards from "./DeckCards.js";
import DeckAside from "./DeckAside.js";

function Deck() {
  const { deck } = useSelector(state => state.deck)

  const dispatch = useDispatch()
  useEffect(() => {
    if (deck.length === 0) {
      getDeck().then(deck => dispatch(setDeck(deck)))
    }
    // eslint-disable-next-line
  }, [])

  return (
    <main className="deck">
      <DeckCards deck={deck} />
      <DeckAside deck={deck} />
    </main>
  )
}

export default Deck;