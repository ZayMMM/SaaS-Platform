import React from "react";
import Chart from "react-apexcharts";
import { Card } from "react-bootstrap";
import { ApexOptions } from "apexcharts";
import CustomDatePicker from "../Date/CustomDatePicker";
import ExportButton from "../Button/ExportButton";

interface BarChartProps {
  chartTitle: string;
  subTitle?: string;
  xaxisCategories: string[];
  dataset: { name: string; data: number[] }[];
  colors?: string[];
  showYearPicker?: boolean;
  selectedDate?: Date;
  onDateChange: (date: any) => void;
}

// simple bar chart
const BarChart: React.FC<BarChartProps> = ({
  chartTitle,
  subTitle,
  xaxisCategories,
  dataset,
  colors,
  selectedDate,
  onDateChange,
  showYearPicker,
}) => {
  // default options
  const apexBarChartOpts: ApexOptions = {
    chart: {
      height: 380,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    colors: colors
      ? colors
      : [
          "#5B8FF9",
          "#5AD8A6",
          "#F6BD16",
          "#6DC8EC",
          "#5D7092",
          "#D235CC",
          "#FF2E2E",
        ],
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },

    xaxis: {
      categories: xaxisCategories,
    },
    legend: {
      offsetY: -10,
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    grid: {
      borderColor: "#f1f3fa",
    },
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
        <Chart
          options={apexBarChartOpts}
          series={dataset}
          type="bar"
          className="apex-charts"
        />
      </Card.Body>
    </Card>
  );
};

export default BarChart;
