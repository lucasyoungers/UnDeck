// Libraries
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"

// Utils
import { setDeck } from "../redux/deck"
import { getDeck } from "../utils"

// Components
import DeckCards from "./DeckCards"
import DeckAside from "./DeckAside"
import LoadingIcon from "./LoadingIcon"

// CSS
import "./css/Deck.css"

function Deck() {
  const { deck, count } = useSelector(state => state.deck)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const onLoadFunction = async () => {
    try {
      setLoading(true)
      if (window.localStorage.deck) {
        await getDeck().then(deck => dispatch(setDeck(deck)))
      }
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  if (count === 0) navigate("/")
  useEffect(() => {
    onLoadFunction()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {loading ? <LoadingIcon /> : <main className="deck"><DeckCards deck={deck} /><DeckAside /></main>}
    </>
  )
}

export default Deck