import LineChart from "../../../components/LineChart/LineChart";

const AverageProductPriceTrendLineChart = () => {
  // chart data
  const averageProductPriceTrendData = {
    chartTitle: "Average Product Price Trend",
    subTitle: "",
    labels: [
      "2021-01",
      "2021-02",
      "2021-03",
      "2021-04",
      "2021-05",
      "2021-06",
      "2021-07",
      "2021-08",
    ],
    datasets: [
      {
        label: "Average Product Price Trend",
        data: [400, 600, 500, 100, 500, 400, 700, 600],
      },
    ],
  };

  return (
    <>
      <LineChart
        {...averageProductPriceTrendData}
        showExport={false}
        showYearPicker={false}
        showLegend={false}
        showFilter={true}
        hideFilterLabel={false}
        showGradient={true}
      />
    </>
  );
};

export default AverageProductPriceTrendLineChart;
