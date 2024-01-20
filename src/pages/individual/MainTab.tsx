import { Nav, Row, Tab } from "react-bootstrap";
import Category from "./Category";
import Brand from "./Brand";
import Product from "./Product";
import { useState } from "react";
import {
  myBrandMentionData,
  myProductList,
  myProductPriceTrendData,
  mySaleTrendData,
  myStockAvailabilityData,
  topSaleProductList,
} from "./data";
import EmptyData from "../../components/EmptyData/EmptyData";

interface TabContentType {
  id: number;
  title: string;
}

const MainTab = () => {
  const [marketShareFilterDate, setMarketShareFilterDate] = useState(
    new Date()
  );

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

  const stockAvailabilityData = {
    chartTitle: "Stocks",
    labels: ["In Stock", "Out of Stock"],
    datasets: [
      {
        data: [64, 43],
        backgroundColor: ["#E8684A", "#F6BD16"],
        borderColor: "transparent",
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
            />

            {/* <EmptyData
              title="Select Category & Sub Category To View Data"
              subTitle="We need your input to retrieve the related information"
            /> */}
          </Tab.Pane>
          <Tab.Pane eventKey="Brand" id="2" key="2">
            <Brand
              categoryOptions={categoryOptions}
              subCategoryOptions={subCategoryOptions}
              brandOptions={brandOptions}
              stockAvailabilityData={stockAvailabilityData}
            />
            {/* <EmptyData
              title="Select Category, Sub Category & Brand To View Data"
              subTitle="We need your input to retrieve the related information"
            /> */}
          </Tab.Pane>
          <Tab.Pane eventKey="Product" id="3" key="3">
            <Product
              categoryOptions={categoryOptions}
              subCategoryOptions={subCategoryOptions}
              brandOptions={brandOptions}
              productOptions={productOptions}
              myStockAvailabilityData={myStockAvailabilityData}
            />
            {/* <EmptyData
              title="Select Category, Sub Category, Brand & Product To View Data"
              subTitle="We need your input to retrieve the related information"
            /> */}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
};

export default MainTab;
