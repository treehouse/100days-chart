import { useState } from "react";
import Chart from "./Chart";

const App = () => {
  const [chartData, setChartData] = useState([
    {
      id: 0,
      day: "monday",
      value: 0,
    },
    {
      id: 1,
      day: "tuesday",
      value: 0,
    },
    {
      id: 2,
      day: "wednesday",
      value: 0,
    },
    {
      id: 3,
      day: "thursday",
      value: 0,
    },
    {
      id: 4,
      day: "friday",
      value: 0,
    },
    {
      id: 5,
      day: "saturday",
      value: 0,
    },
    {
      id: 6,
      day: "sunday",
      value: 0,
    },
  ]);
  return (
    <div className="grid place-items-center h-screen bg-zinc-800">
      <Chart chartData={chartData} setChartData={setChartData} />
    </div>
  );
};
export default App;
