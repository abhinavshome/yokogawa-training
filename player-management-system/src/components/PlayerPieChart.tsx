import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { playerChartSelector } from "../redux/reducers/playerReducer";

ChartJS.register(ArcElement, Tooltip, Legend);

function PlayerPieChart() {
  const pieChartData = useSelector(playerChartSelector);
  return <Pie data={pieChartData} />;
}

export default PlayerPieChart;
