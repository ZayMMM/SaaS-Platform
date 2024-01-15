import React from "react";
import { Card } from "react-bootstrap";

interface ProductPriceCardProps {
  title: string;
  price: string;
}

const ProductPriceCard: React.FC<ProductPriceCardProps> = ({
  title,
  price,
}) => {
  return (
    <Card className="average-product-price-card">
      <Card.Body>
        <p className="title mb-2">{title}</p>
        <p className="price mb-0">{price}</p>
      </Card.Body>
    </Card>
  );
};

export default ProductPriceCard;
