// Libraries
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

// Utils
import { deleteDeck } from "../redux/deck"

// Components
import DeleteSVG from "./svg/DeleteSVG"

function DeckDelete({ deck }) {
  const dispatch = useDispatch()
  return (
    <Link to="/" style={{textDecoration: "none", pointerEvents: (deck.length === 0 && "none")}}>
      <button
        className="header__deck__delete btn"
        disabled={deck.length === 0}
        onClick={() => dispatch(deleteDeck())}
      >
        <DeleteSVG />
      </button>
    </Link>
  )
}

export default DeckDelete