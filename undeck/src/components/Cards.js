// Libraries
import uuid from "react-uuid"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

// Utils
import { setCards, addCards } from "../redux/cards"
import { getCards, getSearch } from "../utils"

// Components
import Card from "./Card"
import LoadingIcon from "./LoadingIcon"
import MoreLoading from "./MoreLoading"

// CSS
import "./css/Cards.css"

function Cards() {
  const { cards } = useSelector(state => state.cards)
  const location = useLocation()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [moreLoading, setMoreLoading] = useState(false)

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

  const onScrollFunction = async () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      try {
        if (location.search === "") {
          window.removeEventListener("scroll", onScrollFunction)
          setMoreLoading(true)
          await getCards().then(cards => dispatch(addCards(cards)))
          setMoreLoading(false)
          window.addEventListener("scroll", onScrollFunction)
        }
      } catch (err) {
        console.error(err)
      }
    }
  }

  useEffect(() => {
    onLoadFunction()
    window.addEventListener('scroll', onScrollFunction)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {loading ? <LoadingIcon /> : <><main className="cards">{cards?.map(card => <Card card={card} key={uuid()} />)}</main>{moreLoading && <MoreLoading />}</>}
    </>
  )
}

export default Cards;