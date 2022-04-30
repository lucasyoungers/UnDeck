import { useEffect, useState } from "react";
import "./css/DeckAside.css";
import DeckChart from "./DeckChart.js";
import DownloadSVG from "./svg/DownloadSVG.js";
// import { Chart } from "chart.js";

function DeckAside({ deck, counts }) {
  const [data, setData] = useState({
    labels: [],
    datasets: []
  });
  useEffect(() => {
    setData({
      // labels: Object.keys(counts),
      labels: ["Pokémon", "Trainers", "Energy"],
      datasets: [{
        backgroundColor: "rgb(186, 168, 202, 0.4)",
        borderWidth: 1,
        // data: Object.keys(counts).map(supertype => counts[supertype])
        data: [5, 11, 10]
      }]
    })
  }, []);
  return (
    <aside className="deck__aside">
      <h2 className="deck__aside__heading">Deck Details</h2>
      {/* <canvas id="deckChart" className="deck__aside__chart"></canvas> */}
      <DeckChart id="deckChart" className="deck__aside__chart" data={data} />
      <button className="deck__aside__download btn">
        <DownloadSVG />
        <span>Download Deck</span>
      </button>
    </aside>
  )
}

export default DeckAside;