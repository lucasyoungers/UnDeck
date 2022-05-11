// Libraries
import { Routes, Route, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

// // Utils
// import { setCards } from "./redux/cards"
// import { getCards } from "./utils"

// Components
import './App.css';
import Header from "./components/Header.js";
import Cards from "./components/Cards.js";
import Deck from "./components/Deck.js";

function App() {
  const location = useLocation()
  const query = location.search

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cards key={query} />} />
        <Route path="deck/*" element={<Deck />} />
      </Routes>
    </div>
  );
}

export default App;