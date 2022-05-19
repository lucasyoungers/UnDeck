// Libraries
import { useDispatch } from "react-redux"

// Utils
import { setType, setCard } from "../redux/modal"

// Components
import CardBottom from "./CardBottom"
import CardCounter from "./CardCounter"

function Card({ card, count }) {
  const dispatch = useDispatch()

  return (
    <article id={card.id} className="card">
      {count && <CardCounter count={count} />}
      <img
        className="card__image"
        src={card.images.small}
        alt={card.name}
        loading="lazy"
        onClick={() => {
          dispatch(setType("text"))
          dispatch(setCard(card))
        }}
      />
      <CardBottom card={card} />
    </article>
  );
}

export default Card