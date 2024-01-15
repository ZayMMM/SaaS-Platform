import { Card } from "react-bootstrap";

const AverageProductPriceCard = () => {
  return (
    <Card className="average-product-price-card">
      <Card.Body>
        <p className="title mb-2">Average Product Price</p>
        <p className="price mb-0">12,728,935,685</p>
      </Card.Body>
    </Card>
  );
};

export default AverageProductPriceCard;
