// Components
import DeckButton from "./DeckButton"
import DeckDelete from "./DeckDelete"

// CSS
import "./css/DeckNav.css"

function Nav({ deck }) {
  return (
    <nav className="header__deck">
      <DeckButton />
      <DeckDelete deck={deck} />
    </nav>
  )
}

export default Nav