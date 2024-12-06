import Chart, { scales } from "chart.js/auto";
import { rateLimitMins, hourDay } from "./data";

const ctx = document.getElementById("line");

Chart.defaults.backgroundColor = "rgba(90, 67, 201, 0.5)";
Chart.defaults.borderColor = "#5a43c9";
Chart.defaults.color = "#383838";

(async function () {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: hourDay,
      datasets: [
        {
          label: "Rate Limiting",
          data: rateLimitMins,
          borderWidth: 0.5,
        },
      ],
    },
    options: {
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
