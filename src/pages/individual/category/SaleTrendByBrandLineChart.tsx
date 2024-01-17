import LineChart from "../../../components/LineChart/LineChart";

const SaleTrendByBrandLineChart = () => {
  // chart data
  const saleTrendByBrandData = {
    chartTitle: "E-Commerce Sale Trend By Brand",
    subTitle: "",
    labels: ["2021-01", "2021-02", "2021-03", "2021-04", "2021-05"],
    datasets: [
      {
        label: "Brand 1",
        backgroundColor: "#1fa083",
        borderColor: "#1fa083",
        data: [100, 300, 200, 500, 700, 800],
      },
      {
        label: "Brand 2",
        backgroundColor: "#5AD8A6",
        borderColor: "#5AD8A6",
        data: [200, 500, 100, 800, 700, 300],
      },
      {
        label: "Brand 3",
        backgroundColor: "#E8684A",
        borderColor: "#E8684A",
        data: [500, 300, 600, 300, 800, 200],
      },
      {
        label: "Brand 4",
        backgroundColor: "#870182",
        borderColor: "#870182",
        data: [100, 400, 200, 600, 800, 500],
      },
      {
        label: "Brand 5",
        backgroundColor: "#F6BD16",
        borderColor: "#F6BD16",
        data: [300, 600, 500, 400, 800, 700],
      },
    ],
  };

  return (
    <>
      <LineChart
        {...saleTrendByBrandData}
        showYearPicker={false}
        showExport={false}
      />
    </>
  );
};

export default SaleTrendByBrandLineChart;
