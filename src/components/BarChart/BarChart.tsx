import React from "react";
import { Bar } from "react-chartjs-2";
import { Card } from "react-bootstrap";
import CustomDatePicker from "../Date/CustomDatePicker";
import ExportButton from "../Button/ExportButton";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJs } from "chart.js";
import DateFilterDropDown from "../DateFilterDropdown/DateFilterDropDown";

ChartJs.register(ChartDataLabels);

interface BarChartProps {
  chartTitle: string;
  subTitle?: string;
  labels?: string[];
  datasets: any;
  colors?: string[];
  showYearPicker?: boolean;
  selectedDate?: Date;
  onDateChange?: (date: any) => void;
  dateFilterType?: number;
  handleFilterTypeChange?: any;
  selectedFilterYear?: Date;
  handleFilterYearChange?: any;
  selectedStartDate?: Date;
  handleStartDateChange?: any;
  selectedEndDate?: Date;
  handleEndDateChange?: any;
  selectedMonth?: number;
  handleMonthChange?: any;
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
  dateFilterType = 1,
  handleFilterTypeChange,
  selectedFilterYear,
  handleFilterYearChange,
  selectedEndDate,
  handleEndDateChange,
  selectedStartDate,
  handleStartDateChange,
  selectedMonth,
  handleMonthChange,
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
      datalabels: {
        display: true,
        color: "black" as const,
        anchor: "end" as const,
        align: "end" as const,
        formatter: (value: string | number) => {
          const numericValue = Number(value);
          if (numericValue >= 1000) {
            return `$${(numericValue / 1000).toLocaleString()}k`;
          } else {
            return `$${numericValue.toLocaleString()}`;
          }
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
          color: "rgba(0,0,0,0.05)",
        },
        stacked: false,
        ticks: {
          beginAtZero: true,
          callback: (value: string | number) => {
            const numericValue =
              typeof value === "string" ? parseFloat(value) : value;
            return `$${numericValue / 1000}k`;
          },
        },
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
    <Card className="dashboard-card h-100">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between w-100 flex-wrap gap-2">
          <p className="chartTitle mb-0">{chartTitle}</p>
          <div className="d-flex gap-2 align-items-center">
            {showYearPicker && (
              <DateFilterDropDown
                handleFilterTypeChange={handleFilterTypeChange}
                selectedFilterType={dateFilterType}
                selectedFilterYear={selectedFilterYear}
                handleFilterYearChange={handleFilterYearChange}
                selectedStartDate={selectedStartDate}
                handleStartDateChange={handleStartDateChange}
                selectedEndDate={selectedEndDate}
                handleEndDateChange={handleEndDateChange}
                handleMonthChange={handleMonthChange}
                selectedMonth={selectedMonth}
              />
            )}
            <ExportButton />
          </div>
        </div>
        <div className="chartjs-chart line-chart-min-320">
          <Bar data={barChartData} options={barChartOpts} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default BarChart;
