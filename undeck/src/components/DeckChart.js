import { Bar } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto"; // makes the chart work for some reason

function DeckChart({ data }) {
  return (
    <div id="asdf">
      <Bar
        data={data}
        options={{
          // maintainAspectRatio: false,
          // responsive: true,
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

export default DeckChart;