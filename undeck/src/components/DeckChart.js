// Libraries
import { useSelector } from "react-redux"
import { Bar } from "react-chartjs-2"
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto" // makes the chart work for some reason

function DeckChart() {
  const { supertypes } = useSelector(state => state.deck)

  return (
    <div className="deck__aside__chart">
      <Bar
        data={{
          labels: Object.keys(supertypes),
          datasets: [{
            backgroundColor: "rgb(186, 168, 202, 0.4)",
            borderWidth: 1,
            data: Object.keys(supertypes).map(supertype => supertypes[supertype])
          }]
        }}
        options={{
          // maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              display: false
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        }}
      />
    </div>
  )
}

export default DeckChart