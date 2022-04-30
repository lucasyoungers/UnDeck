import { Link, useLocation } from "react-router-dom";
import DeckSVG from "./svg/DeckSVG.js";

function DeckButton() {
  const location = useLocation();
  return (
    <Link to="deck" style={{textDecoration: "none"}}>
      <button
        className={"header__deck__button" + (location.pathname === "/deck" ? "" : " btn")}
        disabled={location.pathname === "/deck"}
      >
        <DeckSVG />
        <span>Deck</span>
        <span className="header__deck__button__count"></span>
      </button>
    </Link>
  )
}

export default DeckButton;