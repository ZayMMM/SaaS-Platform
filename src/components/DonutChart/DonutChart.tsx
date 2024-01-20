import React from "react";
import { Card } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartFilterDropDown from "../ChartFilterDropdown/ChartFilterDropDown";

Chart.register(ChartDataLabels);

interface DonutChartProps {
  chartTitle: string;
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
  }[];
  showLegend?: boolean;
  showFilter?: boolean;
}

const DonutChart: React.FC<DonutChartProps> = ({
  chartTitle,
  labels,
  datasets,
  showLegend = true,
  showFilter,
}) => {
  // default options
  const donutChartOpts = {
    maintainAspectRatio: false,
    cutoutPercentage: 60,
    title: {
      display: true,
      text: chartTitle,
      fontSize: 16,
    },

    plugins: {
      legend: {
        display: showLegend,
        position: "bottom" as const,
      },
      datalabels: {
        display: true,
        anchor: "start" as const,
        color: "#000000",
        formatter: (value: any, context: any) => {
          const dataset = context.chart.data.datasets[0];
          const total = dataset.data.reduce(
            (acc: any, data: any) => acc + data,
            0
          );
          const percentage = ((value / total) * 100).toFixed(2) + "%";
          return `${value} (${percentage})`;
        },
      },
    },
  };

  const donutChartData = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <Card className="dashboard-card h-100">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between w-100 flex-wrap gap-2">
          <p className="chartTitle mb-0">{chartTitle}</p>
          {showFilter && <ChartFilterDropDown />}
        </div>

        <div className="chartjs-chart min-w-250 mt-3">
          <Doughnut data={donutChartData} options={donutChartOpts} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default DonutChart;
