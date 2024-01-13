import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";

interface CategoryProps {
  categoryOptions: { value: string; label: string }[];
  subCategoryOptions: { value: string; label: string }[];
  brandOptions: { value: string; label: string }[];
  productOptions: { value: string; label: string }[];
}

const Product: React.FC<CategoryProps> = ({
  categoryOptions,
  subCategoryOptions,
  brandOptions,
  productOptions,
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
      </Row>
    </>
  );
};

export default Product;
