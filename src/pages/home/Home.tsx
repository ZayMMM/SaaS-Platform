import { Row, Col } from "react-bootstrap";
import RevenueHistory from "./RevenueHistory";
import { revenueHistory } from "./data";
import LineChart from "../../components/LineChart/LineChart";
import { useState } from "react";
import BarChart from "../../components/BarChart/BarChart";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  /*
   * handle date change
   */
  const onDateChange = (date: Date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  // chart data
  const lineChartData = {
    selectedDate: selectedDate,
    onDateChange: onDateChange,
    showYearPicker: true,
    chartTitle: "Top Sale By Brand",
    subTitle: "Top 15 Products In Market",
    labels: ["2021-01", "2021-02", "2021-03", "2021-04", "2021-05"],
    datasets: [
      {
        label: "Item 1",
        backgroundColor: "#1fa083",
        borderColor: "#1fa083",
        data: [100, 300, 200, 500, 700, 800],
      },
      {
        label: "Item 2",
        backgroundColor: "#5AD8A6",
        borderColor: "#5AD8A6",
        data: [200, 500, 100, 800, 700, 300],
      },
      {
        label: "Item 3",
        backgroundColor: "#E8684A",
        borderColor: "#E8684A",
        data: [500, 300, 600, 300, 800, 200],
      },
      {
        label: "Item 4",
        backgroundColor: "#870182",
        borderColor: "#870182",
        data: [100, 400, 200, 600, 800, 500],
      },
      {
        label: "Item 5",
        backgroundColor: "#F6BD16",
        borderColor: "#F6BD16",
        data: [300, 600, 500, 400, 800, 700],
      },
      {
        label: "Item 6",
        backgroundColor: "#C78F8F",
        borderColor: "#C78F8F",
        data: [400, 200, 100, 700, 400, 100],
      },
      {
        label: "Item 7",
        backgroundColor: "#1fa083",
        borderColor: "#1fa083",
        data: [300, 500, 100, 800, 700, 800],
      },
      {
        label: "Item 8",
        backgroundColor: "#5AD8A6",
        borderColor: "#5AD8A6",
        data: [200, 500, 100, 800, 700, 300],
      },
      {
        label: "Item 9",
        backgroundColor: "#E8684A",
        borderColor: "#E8684A",
        data: [1000, 900, 600, 100, 400, 200],
      },
      {
        label: "Item 10",
        backgroundColor: "#870182",
        borderColor: "#870182",
        data: [800, 700, 600, 600, 800, 500],
      },
      {
        label: "Item 11",
        backgroundColor: "#D235CC",
        borderColor: "#F6BD16",
        data: [500, 600, 900, 400, 300, 100],
      },
      {
        label: "Item 12",
        backgroundColor: "#C78F8F",
        borderColor: "#C78F8F",
        data: [400, 200, 100, 700, 400, 100],
      },
    ],
  };

  const saleBrandData = {
    chartTitle: "Top Sale By Brand",
    subTitle: "Top 15 Products In Market",
    xaxisCategories: ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"],
    colors: [
      "#5B8FF9",
      "#5AD8A6",
      "#F6BD16",
      "#6DC8EC",
      "#5D7092",
      "#D235CC",
      "#FF2E2E",
    ],
    selectedDate: selectedDate,
    onDateChange: onDateChange,
    showYearPicker: true,
    dataset: [
      {
        name: "Item 1",
        data: [11000, 2000, 5000, 6000, 10000],
      },
      {
        name: "Item 2",
        data: [30000, 50000, 70000, 10000, 30000],
      },
      {
        name: "Item 3",
        data: [40000, 20000, 60000, 80000, 30000],
      },
      {
        name: "Item 4",
        data: [60000, 10000, 40000, 80000, 10000],
      },
      {
        name: "Item 5",
        data: [12000, 40000, 50000, 20000, 70000],
      },
    ],
  };

  return (
    <>
      <Row className="mt-4">
        <Col lg={12}>
          <LineChart {...lineChartData} />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <BarChart {...saleBrandData} />
        </Col>
        <Col xl={6}>
          <RevenueHistory revenueHistory={revenueHistory} />
        </Col>
      </Row>
    </>
  );
};

export default Home;
