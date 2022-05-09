function CardCounter({ count }) {
  return (
    <div className="card__count">{count + "\u00d7"}</div>
  )
}

export default CardCounter