import { Col, Nav, Row, Tab } from "react-bootstrap";
import Category from "./Category";
import Brand from "./Brand";
import Product from "./Product";
import { useState } from "react";

interface TabContentType {
  id: number;
  title: string;
}

const MainTab = () => {
  const [marketShareFilterDate, setMarketShareFilterDate] = useState(
    new Date()
  );
  const [topSaleBrandDate, setTopSaleBrandDate] = useState(new Date());
  const [numberOfSkuByBrandDate, setNumberOfSkuByBrandDate] = useState(
    new Date()
  );
  const [totalSaleByEachBrandDate, setTotalSaleByEachBrandDate] = useState(
    new Date()
  );

  const marketShareDateChange = (date: Date) => {
    if (date) {
      setMarketShareFilterDate(date);
    }
  };

  const topSaleBrandDateChange = (date: Date) => {
    if (date) {
      setTopSaleBrandDate(date);
    }
  };

  const numberOfSkuByBrandDateChange = (date: Date) => {
    if (date) {
      setNumberOfSkuByBrandDate(date);
    }
  };

  const totalSaleByEachBrandDateChange = (date: Date) => {
    if (date) {
      setTotalSaleByEachBrandDate(date);
    }
  };

  const tabContents: TabContentType[] = [
    {
      id: 1,
      title: "Category",
    },
    {
      id: 2,
      title: "Brand",
    },
    {
      id: 3,
      title: "Product",
    },
  ];

  const categoryOptions = [
    { value: "-1", label: "Select One" },
    { value: "1", label: "Category 1" },
    { value: "2", label: "Category 2" },
    { value: "3", label: "Category 3" },
  ];

  const subCategoryOptions = [
    { value: "-1", label: "Select One" },
    { value: "1", label: "Sub Category 1" },
    { value: "2", label: "Sub Category 2" },
    { value: "3", label: "Sub Category 3" },
  ];

  const brandOptions = [
    { value: "-1", label: "Select One" },
    { value: "1", label: "Brand 1" },
    { value: "2", label: "Brand 2" },
    { value: "3", label: "Brand 3" },
  ];

  const productOptions = [
    { value: "-1", label: "Select One" },
    { value: "1", label: "Product 1" },
    { value: "2", label: "Product 2" },
    { value: "3", label: "Product 3" },
  ];

  // chart data
  const marketShareData = {
    selectedDate: marketShareFilterDate,
    onDateChange: marketShareDateChange,
    showYearPicker: true,
    chartTitle: "Market Share",
    subTitle: "Top 15 Categories in Market",
    labels: ["2021-01", "2021-02", "2021-03", "2021-04", "2021-05"],
    datasets: [
      {
        label: "Category 1",
        backgroundColor: "#1fa083",
        borderColor: "#1fa083",
        data: [100, 300, 200, 500, 700, 800],
      },
      {
        label: "Category 2",
        backgroundColor: "#5AD8A6",
        borderColor: "#5AD8A6",
        data: [200, 500, 100, 800, 700, 300],
      },
      {
        label: "Category 3",
        backgroundColor: "#E8684A",
        borderColor: "#E8684A",
        data: [500, 300, 600, 300, 800, 200],
      },
      {
        label: "Category 4",
        backgroundColor: "#870182",
        borderColor: "#870182",
        data: [100, 400, 200, 600, 800, 500],
      },
      {
        label: "Category 5",
        backgroundColor: "#F6BD16",
        borderColor: "#F6BD16",
        data: [300, 600, 500, 400, 800, 700],
      },
      {
        label: "Category 6",
        backgroundColor: "#C78F8F",
        borderColor: "#C78F8F",
        data: [400, 200, 100, 700, 400, 100],
      },
      {
        label: "Category 7",
        backgroundColor: "#1fa083",
        borderColor: "#1fa083",
        data: [300, 500, 100, 800, 700, 800],
      },
      {
        label: "Category 8",
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
        label: "Category 10",
        backgroundColor: "#870182",
        borderColor: "#870182",
        data: [800, 700, 600, 600, 800, 500],
      },
      {
        label: "Category 11",
        backgroundColor: "#D235CC",
        borderColor: "#F6BD16",
        data: [500, 600, 900, 400, 300, 100],
      },
      {
        label: "Category 12",
        backgroundColor: "#C78F8F",
        borderColor: "#C78F8F",
        data: [400, 200, 100, 700, 400, 100],
      },
    ],
  };

  // chart data
  const saleProductByCategory = {
    showYearPicker: false,
    showExport: false,
    chartTitle: "E-Commerce Sale Trend By Category",
    subTitle: "",
    labels: ["2021-01", "2021-02", "2021-03", "2021-04", "2021-05"],
    datasets: [
      {
        label: "Category 1",
        backgroundColor: "#1fa083",
        borderColor: "#1fa083",
        data: [100, 300, 200, 500, 700, 800],
      },
      {
        label: "Category 2",
        backgroundColor: "#5AD8A6",
        borderColor: "#5AD8A6",
        data: [200, 500, 100, 800, 700, 300],
      },
      {
        label: "Category 3",
        backgroundColor: "#E8684A",
        borderColor: "#E8684A",
        data: [500, 300, 600, 300, 800, 200],
      },
      {
        label: "Category 4",
        backgroundColor: "#870182",
        borderColor: "#870182",
        data: [100, 400, 200, 600, 800, 500],
      },
      {
        label: "Category 5",
        backgroundColor: "#F6BD16",
        borderColor: "#F6BD16",
        data: [300, 600, 500, 400, 800, 700],
      },
    ],
  };

  // chart data
  const topSaleBrandData = {
    selectedDate: topSaleBrandDate,
    onDateChange: topSaleBrandDateChange,
    showYearPicker: true,
    chartTitle: "Top Sale Brand in Category",
    subTitle: "Top 5 Brands in Market",
    labels: ["2021-01", "2021-02", "2021-03", "2021-04", "2021-05"],
    datasets: [
      {
        label: "Brand 1",
        backgroundColor: "#1fa083",
        borderColor: "#1fa083",
        data: [100, 300, 200, 500, 700, 800],
      },
      {
        label: "Brand 2",
        backgroundColor: "#5AD8A6",
        borderColor: "#5AD8A6",
        data: [200, 500, 100, 800, 700, 300],
      },
      {
        label: "Brand 3",
        backgroundColor: "#E8684A",
        borderColor: "#E8684A",
        data: [500, 300, 600, 300, 800, 200],
      },
      {
        label: "Brand 4",
        backgroundColor: "#870182",
        borderColor: "#870182",
        data: [100, 400, 200, 600, 800, 500],
      },
      {
        label: "Brand 5",
        backgroundColor: "#F6BD16",
        borderColor: "#F6BD16",
        data: [300, 600, 500, 400, 800, 700],
      },
    ],
  };

  // chart data
  const saleTrendByBrandData = {
    showYearPicker: false,
    showExport: false,
    chartTitle: "E-Commerce Sale Trend By Brand",
    subTitle: "",
    labels: ["2021-01", "2021-02", "2021-03", "2021-04", "2021-05"],
    datasets: [
      {
        label: "Brand 1",
        backgroundColor: "#1fa083",
        borderColor: "#1fa083",
        data: [100, 300, 200, 500, 700, 800],
      },
      {
        label: "Brand 2",
        backgroundColor: "#5AD8A6",
        borderColor: "#5AD8A6",
        data: [200, 500, 100, 800, 700, 300],
      },
      {
        label: "Brand 3",
        backgroundColor: "#E8684A",
        borderColor: "#E8684A",
        data: [500, 300, 600, 300, 800, 200],
      },
      {
        label: "Brand 4",
        backgroundColor: "#870182",
        borderColor: "#870182",
        data: [100, 400, 200, 600, 800, 500],
      },
      {
        label: "Brand 5",
        backgroundColor: "#F6BD16",
        borderColor: "#F6BD16",
        data: [300, 600, 500, 400, 800, 700],
      },
    ],
  };

  // chart data
  const numberOfSkuByBrandData = {
    selectedDate: numberOfSkuByBrandDate,
    onDateChange: numberOfSkuByBrandDateChange,
    showYearPicker: true,
    chartTitle: "Number of SKU By Brand",
    subTitle: "",
    labels: Array(1).fill(""),
    datasets: [
      {
        label: "Beauty Buffet Shop",
        backgroundColor: "#5B8FF9",
        borderColor: "#5B8FF9",
        data: [22000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "SHISEIDO",
        backgroundColor: "#5AD8A6",
        borderColor: "#5AD8A6",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "MISTINE",
        backgroundColor: "#F6BD16",
        borderColor: "#F6BD16",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "SRICHAND",
        backgroundColor: "#E8684A",
        borderColor: "#E8684A",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Clarins",
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
        label: "Estee Lauder",
        backgroundColor: "#D235CC",
        borderColor: "#D235CC",
        data: [8000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
    ],
  };

  const totalSaleByEachBrandData = {
    selectedDate: totalSaleByEachBrandDate,
    onDateChange: totalSaleByEachBrandDateChange,
    showYearPicker: true,
    chartTitle: "Total Sales by each Brand",
    subTitle: "",
    labels: Array(1).fill(""),
    datasets: [
      {
        label: "Beauty Buffet Shop",
        backgroundColor: "#5B8FF9",
        borderColor: "#5B8FF9",
        data: [22000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "SHISEIDO",
        backgroundColor: "#5AD8A6",
        borderColor: "#5AD8A6",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "MISTINE",
        backgroundColor: "#F6BD16",
        borderColor: "#F6BD16",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "SRICHAND",
        backgroundColor: "#E8684A",
        borderColor: "#E8684A",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Clarins",
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
        label: "Estee Lauder",
        backgroundColor: "#D235CC",
        borderColor: "#D235CC",
        data: [8000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
    ],
  };

  return (
    <>
      <Tab.Container defaultActiveKey="Category">
        <Nav
          variant="tabs"
          className="nav-bordered justify-content-center individual-nav-tab"
          as="ul"
        >
          {" "}
          {(tabContents || []).map((tab, index) => {
            return (
              <Nav.Item key={index} as="li" className="ml-5">
                <Nav.Link
                  className="cursor-pointer"
                  href="#"
                  eventKey={tab.title}
                >
                  {tab.title}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="Category" id="1" key="1">
            <Category
              categoryOptions={categoryOptions}
              subCategoryOptions={subCategoryOptions}
              marketShareData={marketShareData}
              saleTrendData={saleProductByCategory}
              topSaleBrandData={topSaleBrandData}
              saleTrendByBrandData={saleTrendByBrandData}
              numberOfSkuByBrandData={numberOfSkuByBrandData}
              totalSaleByEachBrandData={totalSaleByEachBrandData}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="Brand" id="2" key="2">
            <Brand
              categoryOptions={categoryOptions}
              subCategoryOptions={subCategoryOptions}
              brandOptions={brandOptions}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="Product" id="3" key="3">
            <Row>
              <Product
                categoryOptions={categoryOptions}
                subCategoryOptions={subCategoryOptions}
                brandOptions={brandOptions}
                productOptions={productOptions}
              />
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
};

export default MainTab;
