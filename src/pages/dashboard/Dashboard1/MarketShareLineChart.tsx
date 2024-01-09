import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Card, Col, Row } from "react-bootstrap";
import { ApexOptions } from "apexcharts";

import CustomDatePicker from "../../../components/Date/CustomDatePicker";

// simple line chart
const MarketShareLineChart = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  /*
   * handle date change
   */
  const onDateChange = (date: Date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

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
    colors: ["#870182", "#FF2E2E", "#6DC8EC", "#C0FF71"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      width: [2, 2],
      curve: "smooth",
    },
    title: {
      text: "Average High & Low Temperature",
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
      categories: ["2021-01", "2021-02", "2021-03", "2021-04", "2021-05"],
      title: {
        text: "",
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

  // chart data
  const apexLineChartWithLablesData = [
    {
      name: "Item 1",
      data: [100, 200, 300, 500, 200],
    },
    {
      name: "Item 2",
      data: [200, 100, 500, 600, 700],
    },
    {
      name: "Item 3",
      data: [400, 100, 500, 800, 700],
    },
    {
      name: "Item 4",
      data: [300, 100, 200, 400, 800],
    },
    {
      name: "Item 5",
      data: [300, 100, 200, 400, 800],
    },
    {
      name: "Item 6",
      data: [300, 100, 200, 400, 800],
    },
    {
      name: "Item 7",
      data: [300, 100, 200, 400, 800],
    },
    {
      name: "Item 8",
      data: [300, 100, 200, 400, 800],
    },
    {
      name: "Item 9",
      data: [300, 100, 200, 400, 800],
    },
    {
      name: "Item 10",
      data: [300, 100, 200, 400, 800],
    },
    {
      name: "Item 11",
      data: [300, 100, 200, 400, 800],
    },
    {
      name: "Item 12",
      data: [300, 100, 200, 400, 800],
    },
  ];

  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between w-100">
          <h4 className="header-title mb-3">Market Share</h4>
          <div>
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
          </div>
        </div>

        <Chart
          options={apexLineChartWithLables}
          series={apexLineChartWithLablesData}
          type="line"
          className="apex-charts"
        />
      </Card.Body>
    </Card>
  );
};

export default MarketShareLineChart;
