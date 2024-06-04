const ChartLine = ({ value }) => {
  return (
    <div
      style={{ height: `${value}%` }}
      className="w-[50px] rounded-lg bg-red-300 duration-500"
    ></div>
  );
};
export default ChartLine;
