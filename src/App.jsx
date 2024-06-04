import { useState } from "react";
import Chart from "./Chart";

const App = () => {
  const [chartData, setChartData] = useState([
    {
      id: 0,
      day: "monday",
      value: 10,
    },
    {
      id: 1,
      day: "tuesday",
      value: 20,
    },
    {
      id: 2,
      day: "wednesday",
      value: 30,
    },
    {
      id: 3,
      day: "thursday",
      value: 40,
    },
    {
      id: 4,
      day: "friday",
      value: 50,
    },
    {
      id: 5,
      day: "saturday",
      value: 60,
    },
    {
      id: 6,
      day: "sunday",
      value: 70,
    },
  ]);
  return (
    <div className="grid place-items-center h-screen bg-zinc-800">
      <Chart chartData={chartData} setChartData={setChartData} />
    </div>
  );
};
export default App;
