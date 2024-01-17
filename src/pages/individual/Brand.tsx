import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import LineChart from "../../components/LineChart/LineChart";
import DonutChart from "../../components/DonutChart/DonutChart";

import ProductPriceCard from "./ProductPriceCard";
import BarChart from "../../components/BarChart/BarChart";
import SocialMedia from "./SocialMedia";

interface CategoryProps {
  categoryOptions: { value: string; label: string }[];
  subCategoryOptions: { value: string; label: string }[];
  brandOptions: { value: string; label: string }[];
  averageProductPriceTrendData?: any;
  stockAvailabilityData?: any;
  marketShareData?: any;
  brandMentionData?: any;
  numberOfSkuByBrandData?: any;
  totalSaleByEachBrandData?: any;
}

const Brand: React.FC<CategoryProps> = ({
  categoryOptions,
  subCategoryOptions,
  brandOptions,
  averageProductPriceTrendData,
  stockAvailabilityData,
  marketShareData,
  brandMentionData,
  numberOfSkuByBrandData,
  totalSaleByEachBrandData,
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

        {averageProductPriceTrendData && (
          <Col md={6} className="mb-3">
            <LineChart {...averageProductPriceTrendData} />
          </Col>
        )}

        {stockAvailabilityData && (
          <Col md={6}>
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
        {marketShareData && (
          <Col md={6} className="mb-3">
            <LineChart {...marketShareData} />
          </Col>
        )}
        {brandMentionData && (
          <Col md={6}>
            <Row>
              <Col sm={12} className="mb-3">
                <LineChart {...brandMentionData} />
              </Col>
              <Col sm={12}>
                <SocialMedia
                  title="Social Media Data"
                  showExport={true}
                  selectedDate={socialMediaFilterDate}
                  onDateChange={socialMediaDateChange}
                  showYearPicker={true}
                />
              </Col>
            </Row>
          </Col>
        )}

        {numberOfSkuByBrandData && (
          <Col md={6} className="mb-3">
            <BarChart {...numberOfSkuByBrandData} />
          </Col>
        )}

        {totalSaleByEachBrandData && (
          <Col md={6} className="mb-3">
            <BarChart {...totalSaleByEachBrandData} />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Brand;
