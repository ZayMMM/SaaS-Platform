import { Row, Col } from "react-bootstrap";
import UsersBalances from "./UsersBalances";
import RevenueHistory from "./RevenueHistory";

import { balances, revenueHistory } from "./data";
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

  const marketShareData = {
    chartTitle: "Market Share",
    subTitle: "Top 15 Products In Market",
    xaxisCategories: ["2021-01", "2021-02", "2021-03", "2021-04", "2021-05"],
    colors: ["#870182", "#FF2E2E", "#6DC8EC", "#C0FF71"],
    selectedDate: selectedDate,
    onDateChange: onDateChange,
    showYearPicker: true,
    dataset: [
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
        data: [600, 100, 300, 400, 800],
      },
      {
        name: "Item 5",
        data: [400, 200, 100, 600, 700],
      },
      {
        name: "Item 6",
        data: [300, 100, 400, 600, 200],
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
        data: [400, 500, 200, 700, 800],
      },
      {
        name: "Item 10",
        data: [0, 100, 500, 200, 800],
      },
      {
        name: "Item 11",
        data: [300, 100, 200, 400, 800],
      },
      {
        name: "Item 12",
        data: [300, 100, 200, 400, 800],
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
          <LineChart {...marketShareData} />
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
