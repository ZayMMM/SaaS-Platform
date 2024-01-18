import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import DonutChart from "../../components/DonutChart/DonutChart";
import AverageProductPriceTrendLineChart from "./brand/AverageProductPriceTrendLineChart";
import MarketShareData from "./category/MarketShareData";
import BrandMentionLineChart from "./brand/BrandMentionLineChart";
import SkuByBrandBarChart from "./category/SkuByBrandBarChart";
import TotalSaleByBrandBarChart from "./category/TotalSaleByBrandBarChart";
import TopSaleBrandInLineChart from "./brand/TopSaleBrandInLineChart";
import EcommerceSaleTrendLineChart from "./brand/EcommerceSaleTrendLineChart";
import ProductPriceCard from "../../components/ProductPriceCard/ProductPriceCard";
import SocialMediaCard from "./HorizontalSocialMedia";

interface CategoryProps {
  categoryOptions: { value: string; label: string }[];
  subCategoryOptions: { value: string; label: string }[];
  brandOptions: { value: string; label: string }[];
  stockAvailabilityData?: any;
}

const Brand: React.FC<CategoryProps> = ({
  categoryOptions,
  subCategoryOptions,
  brandOptions,

  stockAvailabilityData,
}) => {
  const [socialMediaFilterDate, setSocialMediaFilterDate] = useState(
    new Date()
  );

  const socialMediaDateChange = (date: Date) => {
    setSocialMediaFilterDate(date);
  };

  return (
    <>
      <Row>
        <Col sm={4}>
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
        <Col sm={4}>
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
        <Col sm={4}>
          <Form.Group className="mb-3 ">
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

        <Col md={8} className="mb-3">
          <AverageProductPriceTrendLineChart />
        </Col>

        {stockAvailabilityData && (
          <Col md={4}>
            <Row>
              <Col sm={12} className="mb-3">
                <DonutChart {...stockAvailabilityData} />
              </Col>
              <Col sm={12}>
                <ProductPriceCard
                  title="Average Product Price"
                  price="12,728,935,685"
                />
              </Col>
            </Row>
          </Col>
        )}

        <Col md={7} className="mb-3">
          <MarketShareData />
        </Col>

        <Col md={5}>
          <Row>
            <Col sm={12} className="mb-3">
              <BrandMentionLineChart />
            </Col>
            <Col sm={12} className="mb-3">
              <SocialMediaCard />
            </Col>
          </Row>
        </Col>

        <Col md={5} className="mb-3">
          <SkuByBrandBarChart />
        </Col>

        <Col md={7} className="mb-3">
          <TotalSaleByBrandBarChart />
        </Col>

        <Col md={7} className="mb-3">
          <TopSaleBrandInLineChart />
        </Col>

        <Col md={5}>
          <Row>
            <Col sm={12} className="mb-3">
              <EcommerceSaleTrendLineChart />
            </Col>
            <Col sm={12} className="mb-3">
              <ProductPriceCard
                title="Number of Products in E- Commerce"
                price="12,728,935,685"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Brand;
