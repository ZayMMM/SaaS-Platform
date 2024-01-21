import { Card, Col, Row } from "react-bootstrap";

interface SaleSummaryProps {
  numberOfSale?: string;
  period?: string;
  channel?: string;
  outlet?: string;
}

const SaleSummary = ({
  numberOfSale,
  period,
  channel,
  outlet,
}: SaleSummaryProps) => {
  return (
    <>
      <Card className="sale-summary-card">
        <Card.Body className="py-1">
          <Row>
            <Col md={3}>
              <h5 className="title">Number of Sales</h5>
              <p className="subTitle fs-32">{numberOfSale}</p>
            </Col>
            <Col md={3}>
              <h5 className="title">Period</h5>
              <p className="subTitle">{period}</p>
            </Col>
            <Col md={3}>
              <h5 className="title">Channel</h5>
              <p className="subTitle">{channel}</p>
            </Col>
            <Col md={3}>
              <h5 className="title">Outlet</h5>
              <p className="subTitle">{outlet}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default SaleSummary;
