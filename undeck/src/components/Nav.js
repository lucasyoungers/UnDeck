import "./css/DeckNav.css";
import DeckButton from "./DeckButton.js";
import DeckDelete from "./DeckDelete.js";

function Nav({ deck }) {
  return (
    <nav className="header__deck">
      <DeckButton deck={deck} />
      <DeckDelete deck={deck} />
    </nav>
  )
}

export default Nav;