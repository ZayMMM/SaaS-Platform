import { Col, Row } from "react-bootstrap";
import CompetitorProductListTable from "./CompetitorProductListTable";
import CompetitorPriceTrendLineChart from "./CompetitorPriceTrendLineChart";
import CompetitorProductSaleTrendLineChart from "./CompetitorProductSaleTrendLineChart";
import CompetitorStockAvailability from "./CompetitorStockAvailability";
import CompetitorBrandMentionLineChart from "./CompetitorBrandMentionLineChart";
import VerticalSocialMedia from "./VerticalSocialMedia";

const CompetitorProduct = () => {
  return (
    <>
      <Row>
        <Col sm={12} className="mb-3">
          <h3>Competitor Product</h3>
        </Col>
        <Col md={6} lg={4} className="mb-3">
          <CompetitorProductListTable />
        </Col>
        <Col md={6} lg={4} className="mb-3">
          <CompetitorPriceTrendLineChart />
        </Col>
        <Col md={6} lg={4} className="mb-3">
          <CompetitorProductSaleTrendLineChart />
        </Col>
        <Col md={6} lg={4} className="mb-3">
          <CompetitorStockAvailability />
        </Col>
        <Col md={6} lg={4} className="mb-3">
          <CompetitorBrandMentionLineChart />
        </Col>
        <Col md={6} lg={4} className="mb-3">
          <VerticalSocialMedia />
        </Col>
      </Row>
    </>
  );
};

export default CompetitorProduct;
