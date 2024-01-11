import React from "react";
import { Bar, defaults as ChartjsDefaults } from "react-chartjs-2";
import { Card } from "react-bootstrap";
import CustomDatePicker from "../Date/CustomDatePicker";
import ExportButton from "../Button/ExportButton";

interface BarChartProps {
  chartTitle: string;
  subTitle?: string;
  labels?: string[];
  datasets: any;
  colors?: string[];
  showYearPicker?: boolean;
  selectedDate?: Date;
  onDateChange: (date: any) => void;
}

// simple bar chart
const BarChart: React.FC<BarChartProps> = ({
  chartTitle,
  subTitle,
  labels,
  datasets,
  colors,
  selectedDate,
  onDateChange,
  showYearPicker,
}) => {
  // options
  const barChartOpts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
      },

      tooltip: {
        backgroundColor: "#727cf5",
        titleFontColor: "#fff",
        bodyFontColor: "#fff",
        bodyFontSize: 14,
        displayColors: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
          color: "rgba(0,0,0,0.05)",
        },
        stacked: false,
      },
      x: {
        stacked: false,
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
    },
  };

  const barChartData = {
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
            <ExportButton />
          </div>
        </div>
        <div style={{ height: "320px" }} className="chartjs-chart">
          <Bar data={barChartData} options={barChartOpts} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default BarChart;
