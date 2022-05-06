import uuid from "react-uuid"
import "./css/Cards.css";
import Card from "./Card.js";

function Cards({ cards }) {
  return (
    <main className="cards">
      {cards.map(card => <Card card={card} key={uuid()} />)}
    </main>
  )
}

export default Cards;