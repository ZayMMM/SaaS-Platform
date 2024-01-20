import { Card } from "react-bootstrap";

interface ProductSummaryProps {
  title: string;
  value: string;
  percent?: string;
}

const ProductSummary = ({ title, value, percent }: ProductSummaryProps) => {
  return (
    <>
      <Card className="product-summary-card">
        <Card.Body className="py-1">
          <div className="d-flex align-items-start flex-column gap-1 flex-wrap">
            <p className="mb-1 title">{title}</p>
            <p className="mb-0 value d-flex align-items-center gap-1">
              {percent && (
                <span className="percent">
                  <i className="fe-arrow-up text-success me-1"></i>
                  {percent}
                </span>
              )}
              <span> {value}</span>
            </p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductSummary;
