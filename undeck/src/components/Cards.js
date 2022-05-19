// Libraries
import uuid from "react-uuid"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// Utils
import { setCards } from "../redux/cards"
import { getCards, getSearch } from "../utils"

// Components
import Card from "./Card"

// CSS
import "./css/Cards.css"

function Cards() {
  const { cards } = useSelector(state => state.cards)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (location.search === "") {
      getCards().then(cards => dispatch(setCards(cards)))
    } else {
      getSearch(location.search).then(cards => dispatch(setCards(cards)))
    }
    // eslint-disable-next-line
  }, [])

  return (
    <main className="cards">
      {cards.map(card => <Card card={card} key={uuid()} />)}
    </main>
  )
}

export default Cards;