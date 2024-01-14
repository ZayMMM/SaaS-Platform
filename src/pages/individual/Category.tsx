import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import LineChart from "../../components/LineChart/LineChart";

interface CategoryProps {
  categoryOptions: { value: string; label: string }[];
  subCategoryOptions: { value: string; label: string }[];
  marketShareData?: any;
  saleTrendData?: any;
  topSaleBrandData?: any;
  saleTrendByBrandData?: any;
}

const Category: React.FC<CategoryProps> = ({
  categoryOptions,
  subCategoryOptions,
  marketShareData,
  saleTrendData,
  topSaleBrandData,
  saleTrendByBrandData,
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
        {marketShareData && (
          <Col md={6} className="mb-3">
            <LineChart {...marketShareData} />
          </Col>
        )}
        {saleTrendData && (
          <Col md={6} className="mb-3">
            <LineChart {...saleTrendData} />
          </Col>
        )}
        {topSaleBrandData && (
          <Col md={6} className="mb-3">
            <LineChart {...topSaleBrandData} />
          </Col>
        )}
        {saleTrendByBrandData && (
          <Col md={6} className="mb-3">
            <LineChart {...saleTrendByBrandData} />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Category;
