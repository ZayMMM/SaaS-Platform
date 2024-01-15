import { Card } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

interface DonutChartProps {
  chartTitle: string;
  labels: string[];
  datasets: any;
  showLegend?: boolean;
}

const DonutChart: React.FC<DonutChartProps> = ({
  chartTitle,
  labels,
  datasets,
  showLegend = true,
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
      },
    },
    datalabels: {
      display: false,
      anchor: "start" as const,
    },
  };

  const donutChartData = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <Card className="dashboard-card">
      <Card.Body>
        <p className="chartTitle mb-0">{chartTitle}</p>

        <div className="mb-5 mt-4 chartjs-chart">
          <Doughnut data={donutChartData} options={donutChartOpts} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default DonutChart;
