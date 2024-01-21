import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import DonutChart from "../../components/DonutChart/DonutChart";
import MarketShareData from "./category/MarketShareData";
import EsteeLauderProductTable from "./product/EsteeLauderProductTable";
import CompetitorProductTable from "./product/CompetitorProductTable";
import MyProductListTable from "./product/MyProductListTable";
import MyProductPriceTrendLineChart from "./product/MyProductPriceTrendLineChart";
import MyProductSaleTrendLineChart from "./product/MyProductSaleTrendLineChart";
import MyProductBrandMentionLineChart from "./product/MyProductBrandMentionLineChart";
import SocialMediaCard from "./HorizontalSocialMedia";
import VerticalSocialMedia from "./product/VerticalSocialMedia";
import CompetitorProduct from "./competitorProduct/CompetitorProduct";

interface CategoryProps {
  categoryOptions: { value: string; label: string }[];
  subCategoryOptions: { value: string; label: string }[];
  brandOptions: { value: string; label: string }[];
  productOptions: { value: string; label: string }[];
  myStockAvailabilityData?: any;
}

const Product: React.FC<CategoryProps> = ({
  categoryOptions,
  subCategoryOptions,
  brandOptions,
  productOptions,

  myStockAvailabilityData,
}) => {
  return (
    <>
      <Row>
        <Col sm={3}>
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
        <Col sm={3}>
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
        <Col sm={3}>
          <Form.Group className="mb-3">
            <Form.Label>Brand</Form.Label>
            <Select
              className="react-select react-select-container"
              classNamePrefix="react-select"
              options={brandOptions}
              id="product-brand"
              defaultValue={brandOptions[0]}
            />
          </Form.Group>
        </Col>
        <Col sm={3}>
          <Form.Group className="mb-3">
            <Form.Label>Product</Form.Label>
            <Select
              className="react-select react-select-container"
              classNamePrefix="react-select"
              options={productOptions}
              id="product"
              defaultValue={productOptions[0]}
            />
          </Form.Group>
        </Col>

        <Col md={12} className="mb-3">
          <MarketShareData />
        </Col>

        <Col md={6} className="mb-3">
          <EsteeLauderProductTable />
        </Col>

        <Col md={6} className="mb-3">
          <CompetitorProductTable />
        </Col>

        <Col sm={12} className="mb-3">
          <h3>My Product</h3>
        </Col>

        <Col md={6} lg={4} className="mb-3">
          <MyProductListTable />
        </Col>

        <Col md={6} lg={4} className="mb-3">
          <MyProductPriceTrendLineChart />
        </Col>

        <Col md={6} lg={4} className="mb-3">
          <MyProductSaleTrendLineChart />
        </Col>

        {myStockAvailabilityData && (
          <Col md={6} lg={4} className="mb-3">
            <DonutChart
              {...myStockAvailabilityData}
              showLegend={true}
              showFilter={true}
            />
          </Col>
        )}

        <Col md={6} lg={4} className="mb-3">
          <MyProductBrandMentionLineChart />
        </Col>

        <Col md={6} lg={4} className="mb-3">
          <VerticalSocialMedia />
        </Col>
      </Row>
      <CompetitorProduct />
    </>
  );
};

export default Product;
