import "./css/DeckCards.css";
import Card from "./Card.js";

function DeckCards({ deck }) {
  return (
    <section className="deck__cards">
      {deck.map(card => <Card card={card} count="1" key={card.id} />)}
    </section>
  )
}

export default DeckCards;