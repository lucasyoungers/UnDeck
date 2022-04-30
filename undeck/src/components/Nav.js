import "./css/DeckNav.css";
import DeckButton from "./DeckButton.js";
import DeckDelete from "./DeckDelete.js";

function Nav() {
  return (
    <nav className="header__deck">
      <DeckButton />
      <DeckDelete />
    </nav>
  )
}

export default Nav;