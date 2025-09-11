// chart.js
document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateChartBtn");
  const popup = document.getElementById("popup");
  const popupContainer = document.getElementById("popupChartContainer");
  const closePopup = document.getElementById("closePopup");

  // Static demo data
  const labels = ["Marketing", "Development", "Sales", "Support", "HR", "Admin"];
  const data = [1200, 1900, 3000, 500, 800, 700];
  const datasetLabel = "Department Budget (in $1000s)";

  // Open popup with charts
  generateBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    popupContainer.innerHTML = "";
    renderCharts(labels, data, datasetLabel);
  });

  // Close popup
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Render all charts
  function renderCharts(labels, data, datasetLabel) {
    const chartTypes = ["bar", "line", "pie"];

    chartTypes.forEach((type) => {
      const chartCard = document.createElement("div");
      chartCard.style.width = "32%";
      chartCard.style.height = "350px";
      chartCard.style.background = "#fff";
      chartCard.style.padding = "15px";
      chartCard.style.borderRadius = "15px";
      chartCard.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
      chartCard.style.display = "flex";
      chartCard.style.flexDirection = "column";
      chartCard.style.alignItems = "center";
      chartCard.style.justifyContent = "center";
      chartCard.style.margin = "10px";

      const canvas = document.createElement("canvas");
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      chartCard.appendChild(canvas);

      popupContainer.appendChild(chartCard);

      new Chart(canvas, {
        type,
        data: {
          labels,
          datasets: [
            {
              label: datasetLabel,
              data,
              borderWidth: 2,
              borderColor: "#4a90e2",
              backgroundColor: [
                "#4a90e2",
                "#50e3c2",
                "#f5a623",
                "#d0021b",
                "#9013fe",
                "#7ed321",
              ],
              tension: 0.4, // for smooth line chart
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true, labels: { font: { size: 14 } } },
            title: {
              display: true,
              text: type.toUpperCase() + " Chart",
              font: { size: 18, weight: "bold" },
              color: "#333",
            },
          },
          scales: type !== "pie" ? {
            y: { beginAtZero: true }
          } : {},
        },
      });
    });
  }
});
