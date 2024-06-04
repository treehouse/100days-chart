const ButtonSet = ({ id, chartData, setChartData }) => {
  const handleDecrement = (id) => {
    const newChartData = chartData.map((data) => {
      if (data.id === id && data.value !== 0) {
        return { ...data, value: data.value - 10 };
      }
      return data;
    });
    setChartData(newChartData);
  };

  const handleIncrement = (id) => {
    const newChartData = chartData.map((data) => {
      if (data.id === id && data.value !== 100) {
        return { ...data, value: data.value + 10 };
      }
      return data;
    });
    setChartData(newChartData);
  };

  return (
    <div className="flex w-[60px] items-center justify-center m-auto gap-1 mt-2">
      <button
        onClick={() => {
          handleDecrement(id);
        }}
        className="grid place-items-center bg-zinc-200 cursor-pointer hover:bg-zinc-500 duration-200 hover:text-white w-full m-auto h-[30px] rounded-sm"
      >
        -
      </button>
      <button
        onClick={() => {
          handleIncrement(id);
        }}
        className="grid place-items-center bg-zinc-200 cursor-pointer hover:bg-zinc-500 duration-200 hover:text-white w-full  m-auto h-[30px] rounded-sm"
      >
        +
      </button>
    </div>
  );
};
export default ButtonSet;
