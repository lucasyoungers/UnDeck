// Utils
import { openDeckPDF } from "../utils"

// Components
import DeckChart from "./DeckChart"
import DownloadSVG from "./svg/DownloadSVG"

// CSS
import "./css/DeckAside.css"

function DeckAside() {
  return (
    <aside className="deck__aside">
      <h2 className="deck__aside__heading">Deck Details</h2>
      <DeckChart id="deckChart" className="deck__aside__chart" />
      <button
        className="deck__aside__download btn"
        onClick={() => openDeckPDF(window.localStorage.deck)}
      >
        <DownloadSVG />
        <span>Download Deck</span>
      </button>
    </aside>
  )
}

export default DeckAside