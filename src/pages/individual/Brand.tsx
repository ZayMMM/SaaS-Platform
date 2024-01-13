import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";

interface CategoryProps {
  categoryOptions: { value: string; label: string }[];
  subCategoryOptions: { value: string; label: string }[];
  brandOptions: { value: string; label: string }[];
}

const Brand: React.FC<CategoryProps> = ({
  categoryOptions,
  subCategoryOptions,
  brandOptions,
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
      </Row>
    </>
  );
};

export default Brand;
