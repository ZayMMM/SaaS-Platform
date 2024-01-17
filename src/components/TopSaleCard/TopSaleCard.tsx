import { Card } from "react-bootstrap";

interface TopSaleProps {
  title: string;
  percent: string;
  isUp: boolean;
  subTitle?: string;
}

const TopSaleCard = ({ title, percent, isUp, subTitle }: TopSaleProps) => {
  return (
    <>
      <Card className="top-sale-percent-card">
        <Card.Body className="p-2">
          <h4 className="title">{title}</h4>
          <p className="mb-0">
            {isUp ? (
              <i className="fe-arrow-up text-success me-1"></i>
            ) : (
              <i className="fe-arrow-down text-danger me-1"></i>
            )}
            <span className="percent-title">{percent}</span>
            {subTitle && <span className="sub-title me-1"> {subTitle}</span>}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default TopSaleCard;
