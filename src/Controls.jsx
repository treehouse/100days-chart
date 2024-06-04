import ButtonSet from "./ButtonSet";

const Controls = ({ chartData, id, day, setChartData }) => {
  return (
    <div className="flex flex-col justify-center">
      <p>{day}</p>
      <ButtonSet chartData={chartData} id={id} setChartData={setChartData} />
    </div>
  );
};
export default Controls;
