import { Row, Col } from "react-bootstrap";
import RevenueHistory from "./RevenueHistory";
import { revenueHistory, topSaleProductList } from "./data";
import LineChart from "../../components/LineChart/LineChart";
import { useState } from "react";
import BarChart from "../../components/BarChart/BarChart";
import TopSaleProduct from "./TopSaleProduct";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [brandChartDate, setBrandChartDate] = useState<Date>(new Date());

  /*
   * handle date change
   */
  const onDateChange = (date: Date) => {
    if (date) {
      console.log(date);
      setSelectedDate(date);
    }
  };

  const brandChartDateChange = (date: Date) => {
    if (date) {
      setBrandChartDate(date);
    }
  };

  const exportChange = () => {};

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

  const emptyLabels = Array(1).fill("");

  // chart data
  const barChartData = {
    selectedDate: brandChartDate,
    onDateChange: brandChartDateChange,
    showYearPicker: true,
    chartTitle: "Top Sale By Brand",
    subTitle: "",
    labels: emptyLabels,
    datasets: [
      {
        label: "Item 1",
        backgroundColor: "#5B8FF9",
        borderColor: "#5B8FF9",
        data: [22000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 2",
        backgroundColor: "#5AD8A6",
        borderColor: "#5AD8A6",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 3",
        backgroundColor: "#F6BD16",
        borderColor: "#F6BD16",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 4",
        backgroundColor: "#E8684A",
        borderColor: "#E8684A",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 5",
        backgroundColor: "#6DC8EC",
        borderColor: "#6DC8EC",
        data: [12000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 6",
        backgroundColor: "#5D7092",
        borderColor: "#5D7092",
        data: [10000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 7",
        backgroundColor: "#D235CC",
        borderColor: "#D235CC",
        data: [8000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 8",
        backgroundColor: "#FF2E2E",
        borderColor: "#FF2E2E",
        data: [8000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 9",
        backgroundColor: "#F6BD16",
        borderColor: "#F6BD16",
        data: [6000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 10",
        backgroundColor: "#F6BD16",
        borderColor: "#F6BD16",
        data: [6000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
    ],
  };

  return (
    <>
      <Row className="mt-4">
        <Col lg={12} className="mb-3">
          <LineChart {...lineChartData} />
        </Col>
      </Row>

      <Row>
        <Col xl={6} className="mb-3">
          <BarChart {...barChartData} />
        </Col>
        <Col xl={6} className="mb-3">
          <TopSaleProduct
            topSaleProductList={topSaleProductList}
            showExport={true}
            selectedDate={selectedDate}
            showYearPicker={true}
            onDateChange={onDateChange}
          />
        </Col>
      </Row>
    </>
  );
};

export default Home;
