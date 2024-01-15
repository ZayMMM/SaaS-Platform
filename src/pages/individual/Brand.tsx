import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import LineChart from "../../components/LineChart/LineChart";
import DonutChart from "../../components/DonutChart/DonutChart";
import AverageProductPriceCard from "./AverageProductPriceCard";

interface CategoryProps {
  categoryOptions: { value: string; label: string }[];
  subCategoryOptions: { value: string; label: string }[];
  brandOptions: { value: string; label: string }[];
  averageProductPriceTrendData?: any;
  stockAvailabilityData?: any;
  marketShareData?: any;
  brandMentionData?: any;
}

const Brand: React.FC<CategoryProps> = ({
  categoryOptions,
  subCategoryOptions,
  brandOptions,
  averageProductPriceTrendData,
  stockAvailabilityData,
  marketShareData,
  brandMentionData,
}) => {
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
              <Col sm={12}>
                <DonutChart {...stockAvailabilityData} />
              </Col>
              <Col sm={12}>
                <AverageProductPriceCard />
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
                <AverageProductPriceCard />
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </>
  );
};

export default Brand;
