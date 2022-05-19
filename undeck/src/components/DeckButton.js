// Libraries
import { Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

// Components
import DeckSVG from "./svg/DeckSVG"

function DeckButton() {
  const location = useLocation();
  const { count } = useSelector(state => state.deck)
  return (
    <Link to="deck" style={{textDecoration: "none", pointerEvents: (count === 0 && "none")}}>
      <button
        className={"header__deck__button" + (location.pathname === "/deck" ? "" : " btn")}
        disabled={location.pathname === "/deck" || count === 0}
      >
        <DeckSVG />
        <span>Deck</span>
        {count !== 0 && <span className="header__deck__button__count">&nbsp;({count})</span>}
      </button>
    </Link>
  )
}

export default DeckButton