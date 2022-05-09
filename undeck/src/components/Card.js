import CardBottom from "./CardBottom.js";
import CardCounter from "./CardCounter.js";

function Card({ card, count }) {
  return (
    <article id={card.id} className="card">
      {count && <CardCounter count={count} />}
      <img
        className="card__image"
        src={card.images.small}
        alt={card.name}
        loading="lazy"
      />
      <CardBottom card={card} />
    </article>
  );
}

export default Card;