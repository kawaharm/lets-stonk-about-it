// Imports
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import plugin from "./plugin.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Stock = ({ x, y, name }) => {
  const stockData = {
    labels: x,
    datasets: [
      {
        label: "Closing Price",
        data: y,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="stockContainer" style={{ width: "100%", height: "50vh" }}>
      <Line
        className="tweetGraph"
        data={stockData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: `Closing Prices for ${name}`,
            },
            legend: {
              display: false,
            },
            customCanvasBackgroundColor: {
              color: "white",
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Period",
              },
            },
            y: {
              title: {
                display: true,
                text: "Closing Price (USD)",
              },
            },
          },
        }}
        plugins={[plugin]}
      />
    </div>
  );
};

export default Stock;
