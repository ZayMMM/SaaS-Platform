import { Card } from "react-bootstrap";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import CustomDatePicker from "../Date/CustomDatePicker";
import ExportButton from "../Button/ExportButton";

interface LineChartProps {
  chartTitle: string;
  subTitle?: string;
  xaxisCategories: string[];
  dataset: { name: string; data: number[] }[];
  colors?: string[];
  showYearPicker?: boolean;
  selectedDate?: Date;
  onDateChange: (date: any) => void;
}

const LineChart: React.FC<LineChartProps> = ({
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
  const apexLineChartWithLables: ApexOptions = {
    chart: {
      height: "400px",
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: colors ? colors : ["#870182", "#FF2E2E", "#6DC8EC", "#C0FF71"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      width: [2, 2],
      curve: "straight",
    },
    title: {
      text: "Items",
      align: "left",
      style: {
        fontSize: "14px",
      },
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.2,
      },
      borderColor: "#f1f3fa",
    },
    markers: {
      size: 6,
    },
    xaxis: {
      categories: { xaxisCategories },
      title: {
        text: "test",
      },
    },
    yaxis: {
      title: {
        text: "Temperature",
      },
      min: 0,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 200, // Adjust the height for smaller screens
            toolbar: {
              show: false,
            },
          },
          legend: {
            show: false,
          },
        },
      },
      {
        breakpoint: 1200, // Adjust the breakpoint for larger screens
        options: {
          chart: {
            height: 400, // Adjust the height for larger screens
          },
        },
      },
    ],
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

        {subTitle && (
          <p style={{ fontSize: "12px", color: "#8C8C8C" }}>{subTitle}</p>
        )}
        <Chart
          options={apexLineChartWithLables}
          series={dataset}
          type="line"
          className="apex-charts"
        />
      </Card.Body>
    </Card>
  );
};

export default LineChart;
