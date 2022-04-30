import "./css/Cards.css";
import Card from "./Card.js";

function Cards({ cards }) {
  return (
    <main className="cards">
      {cards.map(card => <Card card={card} key={card.id} />)}
    </main>
  )
}

export default Cards;