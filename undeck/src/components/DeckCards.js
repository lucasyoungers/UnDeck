import uuid from "react-uuid"
import "./css/DeckCards.css";
import Card from "./Card.js";

function DeckCards({ deck }) {
  return (
    <section className="deck__cards">
      {deck.map(card => <Card card={card[0]} count={card[1]} key={uuid()} />)}
    </section>
  )
}

export default DeckCards;