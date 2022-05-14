import { openDeckPDF } from "../utils";
import "./css/DeckAside.css";
import DeckChart from "./DeckChart.js";
import DownloadSVG from "./svg/DownloadSVG.js";

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

export default DeckAside;