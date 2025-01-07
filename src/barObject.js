import Chart, { scales } from "chart.js/auto";
import { combinedData } from "./data";

const ctx = document.getElementById("barObject");

Chart.defaults.backgroundColor = "rgba(90, 67, 201, 0.5)";
Chart.defaults.borderColor = "#5a43c9";
Chart.defaults.color = "#383838";

(async function () {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: combinedData.map((dataPoint) => {
        // console.log(dataPoint);
        if (dataPoint.hour === "0:00") {
          return dataPoint.hour + dataPoint.day;
        } else {
          return dataPoint.hour;
        }
      }),
      datasets: [
        {
          label: "Rate Limiting",
          data: combinedData.map((dataPoint) => dataPoint.rateLimit),
          borderWidth: 0.5,
        },
      ],
    },
    options: {
      animation: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: "#d9d9d9" },
          title: { display: true, text: "Minutes of Rate Limiting" },
        },
        x: {
          grid: { display: false },
          title: { display: true, text: "Date and Hour" },
        },
      },
    },
    plugins: [],
  });
})();
