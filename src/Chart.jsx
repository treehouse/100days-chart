import ChartControls from "./ChartControls";
import ChartLine from "./ChartLine";

const Chart = ({ chartData, setChartData }) => {
  return (
    <div className="w-[80%]">
      <h1 className="text-white text-3xl mb-5 font-extrabold">
        My Daily Social Battery
      </h1>
      <div className="bg-white rounded-lg py-5 px-10">
        <div className="flex justify-between items-end h-[30vh]">
          {chartData.map((data, index) => {
            return <ChartLine key={index} value={data.value} />;
          })}
        </div>
        <div className="w-full flex justify-between">
          {chartData.map((data, index) => {
            return (
              <p key={index} className="w-[50px] text-center mt-2">
                {data.value}%
              </p>
            );
          })}
        </div>
      </div>

      <div className="w-full mt-2">
        <div className="bg-white rounded-lg py-5 px-10">
          <ChartControls chartData={chartData} setChartData={setChartData} />
        </div>
      </div>
    </div>
  );
};
export default Chart;
