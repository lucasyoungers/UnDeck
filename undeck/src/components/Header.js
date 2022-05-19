// Libraries
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

// Utils
import { setDeck } from "../redux/deck"
import { getDeck } from "../utils"

// Components
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import Nav from "./Nav"

// CSS
import "./css/Header.css"

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

export default Header