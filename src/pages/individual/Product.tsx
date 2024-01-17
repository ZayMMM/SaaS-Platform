import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import LineChart from "../../components/LineChart/LineChart";
import EsteeLauderProduct from "./EsteeLauderProduct";
import CompetitorProduct from "./CompetitorProduct";
import MyProductList from "./MyProductList";
import DonutChart from "../../components/DonutChart/DonutChart";
import SocialMedia from "./SocialMedia";

interface CategoryProps {
  categoryOptions: { value: string; label: string }[];
  subCategoryOptions: { value: string; label: string }[];
  brandOptions: { value: string; label: string }[];
  productOptions: { value: string; label: string }[];
  marketShareData?: any;
  esteeLauderProductList?: any;
  esteeLauderDate?: Date;
  esteeLauderDateChange?: any;
  myProductList?: any;
  productPriceTrendData?: any;
  myProductPriceTrendDate?: Date;
  myProductPriceTrendDateChange?: any;
  showMyProductPriceTrendYearPicker?: boolean;
  mySaleTrendData?: any;
  mySaleTrendDate?: Date;
  mySaleTrendDateChange?: any;
  showMySaleTrendPicker?: boolean;
  myStockAvailabilityData?: any;
  myBrandMentionData?: any;
  myBrandMentionDate?: Date;
  myBrandMentionDateChange?: any;
  showMyBrandMentionPicker?: boolean;
  socialMediaDate?: Date;
  socialMediaDateChange?: any;
}

const Product: React.FC<CategoryProps> = ({
  categoryOptions,
  subCategoryOptions,
  brandOptions,
  productOptions,
  marketShareData,
  esteeLauderProductList,
  esteeLauderDate,
  esteeLauderDateChange,
  myProductList,
  productPriceTrendData,
  myProductPriceTrendDate,
  myProductPriceTrendDateChange,
  showMyProductPriceTrendYearPicker = false,
  mySaleTrendData,
  mySaleTrendDate,
  mySaleTrendDateChange,
  showMySaleTrendPicker = false,
  myStockAvailabilityData,
  myBrandMentionData,
  myBrandMentionDate,
  myBrandMentionDateChange,
  showMyBrandMentionPicker = false,
  socialMediaDate,
  socialMediaDateChange,
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
        {marketShareData && (
          <Col md={12} className="mb-3">
            <LineChart {...marketShareData} />
          </Col>
        )}

        {esteeLauderProductList && (
          <Col md={6} className="mb-3">
            <EsteeLauderProduct
              productList={esteeLauderProductList}
              showExport={true}
              showYearPicker={true}
              selectedDate={esteeLauderDate}
              onDateChange={esteeLauderDateChange}
            />
          </Col>
        )}

        {esteeLauderProductList && (
          <Col md={6} className="mb-3">
            <CompetitorProduct
              productList={esteeLauderProductList}
              showExport={true}
              showYearPicker={true}
              selectedDate={esteeLauderDate}
              onDateChange={esteeLauderDateChange}
            />
          </Col>
        )}

        <Col sm={12} className="mb-3">
          <h3>My Product</h3>
        </Col>

        {myProductList && (
          <Col md={6} className="mb-3">
            <MyProductList
              title="Product Name"
              productList={myProductList}
              showExport={true}
              showYearPicker={true}
              selectedDate={esteeLauderDate}
              onDateChange={esteeLauderDateChange}
            />
          </Col>
        )}
        {productPriceTrendData && (
          <Col md={6} className="mb-3">
            <LineChart
              {...productPriceTrendData}
              showYearPicker={showMyProductPriceTrendYearPicker}
              selectedDate={myProductPriceTrendDate}
              onDateChange={myProductPriceTrendDateChange}
            />
          </Col>
        )}

        {mySaleTrendData && (
          <Col md={6} className="mb-3">
            <LineChart
              {...mySaleTrendData}
              showYearPicker={showMySaleTrendPicker}
              selectedDate={mySaleTrendDate}
              onDateChange={mySaleTrendDateChange}
            />
          </Col>
        )}
        {myStockAvailabilityData && (
          <Col md={6} className="mb-3">
            <DonutChart {...myStockAvailabilityData} showLegend={true} />
          </Col>
        )}
        {myBrandMentionData && (
          <Col md={6} className="mb-3">
            <LineChart
              {...myBrandMentionData}
              showYearPicker={showMyBrandMentionPicker}
              selectedDate={myBrandMentionDate}
              onDateChange={myBrandMentionDateChange}
            />
          </Col>
        )}

        <Col md={6} className="mb-3">
          <SocialMedia
            title="Social Media Data"
            showExport={true}
            selectedDate={socialMediaDate}
            onDateChange={socialMediaDateChange}
            showYearPicker={true}
            isVertical={true}
          />
        </Col>
      </Row>
    </>
  );
};

export default Product;
