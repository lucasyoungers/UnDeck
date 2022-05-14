// Libraries
import { Routes, Route, useLocation } from "react-router-dom"

// Components
import './App.css';
import ImageModal from "./components/ImageModal"
import TextModal from "./components/TextModal"
import Header from "./components/Header"
import Cards from "./components/Cards"
import Deck from "./components/Deck"

function App() {
  const location = useLocation()
  const query = location.search

  return (
    <div className="App">
      <ImageModal />
      <TextModal />
      <Header />
      <Routes>
        <Route path="/" element={<Cards key={query} />} />
        <Route path="deck/*" element={<Deck />} />
      </Routes>
    </div>
  );
}

export default App