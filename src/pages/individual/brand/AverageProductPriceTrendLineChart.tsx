import { useState } from "react";
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
        backgroundColor: "#1fa083",
        borderColor: "#1fa083",
        data: [400, 600, 500, 100, 500, 400, 700, 600],
        fill: {
          target: "origin",
          above: "rgba(31, 160, 131, 0.3)",
        },
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
      />
    </>
  );
};

export default AverageProductPriceTrendLineChart;
