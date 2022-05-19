// Libraries
import uuid from "react-uuid"

// Components
import Card from "./Card"

// CSS
import "./css/DeckCards.css"

function DeckCards({ deck }) {
  return (
    <section className="deck__cards">
      {deck.map(card => <Card card={card[0]} count={card[1]} key={uuid()} />)}
    </section>
  )
}

export default DeckCards