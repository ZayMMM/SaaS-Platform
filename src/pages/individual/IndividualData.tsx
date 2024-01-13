import { Col, Row } from "react-bootstrap";
import MainTab from "./MainTab";
import "../../assets/scss/IndividualData.scss";

const IndividualData = () => {
  return (
    <>
      <Row className="mt-3">
        <Col sm={12}>
          <MainTab />
        </Col>
      </Row>
    </>
  );
};

export default IndividualData;
