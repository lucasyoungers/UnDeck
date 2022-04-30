import CardBottom from "./CardBottom.js";

function Card({ card, count }) {
  return (
    <article id={card.id} className="card">
      {count && <div className="card__count">{count + "\u00d7"}</div>}
      <img
        className="card__image"
        src={card.images.small || card.images.large}
        alt={card.name}
        loading="lazy"
      />
      <CardBottom card={card} />
    </article>
  );
}

export default Card;