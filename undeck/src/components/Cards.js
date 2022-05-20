// Libraries
import uuid from "react-uuid"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

// Utils
import { setCards } from "../redux/cards"
import { getCards, getSearch } from "../utils"

// Components
import Card from "./Card"
import LoadingIcon from "./LoadingIcon"

// CSS
import "./css/Cards.css"

function Cards() {
  const { cards } = useSelector(state => state.cards)
  const location = useLocation()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const onLoadFunction = async () => {
    try {
      setLoading(true)
      if (location.search === "") {
        await getCards().then(cards => dispatch(setCards(cards)))
      } else {
        await getSearch(location.search).then(cards => dispatch(setCards(cards)))
      }
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    onLoadFunction()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {loading ? <LoadingIcon /> : <main className="cards">{cards.map(card => <Card card={card} key={uuid()} />)}</main>}
    </>
  )
}

export default Cards;