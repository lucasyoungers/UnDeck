// Libraries
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Utils
import { setDeck } from "../redux/deck"
import { getDeck } from "../utils"

// Components
import "./css/Header.css";
import Logo from "./Logo.js";
import SearchBar from "./SearchBar.js";
import Nav from "./Nav.js";

function Header() {
  const { deck } = useSelector(state => state.deck)
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.localStorage.deck) {
      getDeck().then(deck => dispatch(setDeck(deck)))
    }
    // eslint-disable-next-line
  }, [])

  return (
    <header className="header">
      <Logo />
      <SearchBar />
      <Nav deck={deck} />
    </header>
  )
}

export default Header;