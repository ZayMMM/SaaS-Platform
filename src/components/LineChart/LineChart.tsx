import { Card } from "react-bootstrap";
import CustomDatePicker from "../Date/CustomDatePicker";
import ExportButton from "../Button/ExportButton";
import { defaults as ChartjsDefaults, Line } from "react-chartjs-2";

interface LineChartProps {
  chartTitle: string;
  subTitle?: string;
  labels: string[];
  datasets: any;
  colors?: string[];
  showYearPicker?: boolean;
  showExport?: boolean;
  selectedDate?: Date;
  onDateChange: (date: any) => void;
}

const LineChart: React.FC<LineChartProps> = ({
  chartTitle = "Chart",
  subTitle,
  labels = [],
  datasets,
  selectedDate,
  onDateChange,
  showYearPicker = true,
  showExport = true,
}) => {
  // chart options
  const lineChartOpts = {
    responsive: true,
    maintainAspectRatio: true,
    tooltips: {
      intersect: true,
    },
    hover: {
      intersect: true,
    },
    plugins: {
      filler: {
        propagate: false,
      },
      legend: {
        position: "top" as const,
        align: "end" as const,
        display: true,
        labels: {
          usePointStyle: true,
          fontSize: 12,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
      y: {
        ticks: {
          stepSize: 100,
        },
        display: true,
        borderDash: [5, 5],
        grid: {
          color: "rgba(0,0,0,0.1)",
        },
      },
    },
  };

  const lineChartData = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between w-100">
          <p
            style={{ fontSize: "18px", fontWeight: "600", marginBottom: "0px" }}
          >
            {chartTitle}
          </p>
          <div className="d-flex gap-2 align-items-center">
            {showYearPicker && (
              <CustomDatePicker
                hideAddon={false}
                dateFormat="yyyy"
                timeCaption="time"
                value={selectedDate}
                showYearPicker={true}
                onChange={(date) => {
                  onDateChange(date);
                }}
              />
            )}
            {showExport && <ExportButton />}
          </div>
        </div>

        {subTitle && (
          <p style={{ fontSize: "12px", color: "#8C8C8C" }}>{subTitle}</p>
        )}
        <div
          style={{ minHeight: "320px", maxWidth: "100%" }}
          className="mt-3 chartjs-chart"
        >
          <Line data={lineChartData} options={lineChartOpts} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default LineChart;
