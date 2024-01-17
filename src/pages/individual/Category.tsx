import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import MarketShareData from "./category/MarketShareData";
import SaleTrendByCategory from "./category/SaleTrendByCategory";
import TopSaleBrandInCategory from "./category/TopSaleBrandInCategory";
import SkuByBrandBarChart from "./category/SkuByBrandBarChart";
import SaleTrendByBrandLineChart from "./category/SaleTrendByBrandLineChart";
import TotalSaleByBrandBarChart from "./category/TotalSaleByBrandBarChart";

interface CategoryProps {
  categoryOptions: { value: string; label: string }[];
  subCategoryOptions: { value: string; label: string }[];
}

const Category: React.FC<CategoryProps> = ({
  categoryOptions,
  subCategoryOptions,
}) => {
  return (
    <>
      <Row>
        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Categories</Form.Label>
            <Select
              className="react-select react-select-container"
              classNamePrefix="react-select"
              options={categoryOptions}
              id="product-category"
              defaultValue={categoryOptions[0]}
            />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Sub Category</Form.Label>
            <Select
              className="react-select react-select-container"
              classNamePrefix="react-select"
              options={subCategoryOptions}
              id="product-sub-category"
              defaultValue={subCategoryOptions[0]}
            />
          </Form.Group>
        </Col>

        <Col md={7} className="mb-3">
          <MarketShareData />
        </Col>

        <Col md={5} className="mb-3">
          <SaleTrendByCategory />
        </Col>

        <Col md={7} className="mb-3">
          <TopSaleBrandInCategory />
        </Col>

        <Col md={5} className="mb-3">
          <SaleTrendByBrandLineChart />
        </Col>

        <Col md={6} className="mb-3">
          <SkuByBrandBarChart />
        </Col>

        <Col md={6} className="mb-3">
          <TotalSaleByBrandBarChart />
        </Col>
      </Row>
    </>
  );
};

export default Category;
