// Libraries
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Utils
import { setCards } from "./redux/cards"
import { getCards } from "./utils"

// Components
import './App.css';
import Header from "./components/Header.js";
import Cards from "./components/Cards.js";
import Deck from "./components/Deck.js";

function App() {
  const { cards } = useSelector(state => state.cards)

  const dispatch = useDispatch()
  useEffect(() => {
    getCards().then(cards => dispatch(setCards(cards)))
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cards cards={cards} />} />
        <Route path="deck/*" element={<Deck />} />
      </Routes>
    </div>
  );
}

export default App;