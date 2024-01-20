import { Row, Col } from "react-bootstrap";

import TopSaleProduct from "./TopSaleProduct";
import MarketShareData from "./MarketShareData";
import TopSaleBrandData from "./TopSaleBrandData";

const Home = () => {
  return (
    <>
      <Row className="mt-4">
        <Col lg={12} className="mb-3">
          <MarketShareData />
        </Col>
      </Row>

      <Row>
        <Col xl={6} className="mb-3">
          <TopSaleBrandData />
        </Col>
        <Col xl={6} className="mb-3">
          <TopSaleProduct />
        </Col>
      </Row>
    </>
  );
};

export default Home;
