import Controls from "./Controls";

const ChartControls = ({ chartData, setChartData }) => {
  return (
    <div className="flex justify-between items-center">
      {chartData.map((data, index) => {
        return (
          <Controls
            chartData={chartData}
            id={data.id}
            day={data.day}
            key={index}
            setChartData={setChartData}
          />
        );
      })}
    </div>
  );
};
export default ChartControls;
