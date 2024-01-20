import { Button } from "react-bootstrap";

interface EmptyDataProps {
  title: string;
  subTitle?: string;
}

const EmptyData = ({ title, subTitle }: EmptyDataProps) => {
  return (
    <>
      <div className="d-flex align-items-center flex-column gap-1 empty-state-section">
        <Button className="individual-search-btn">
          <i className="fe-search" style={{ color: "#5B8FF9" }}></i>
        </Button>
        <h5 className="title mb-1">{title}</h5>
        <p className="sub-title">{subTitle}</p>
      </div>
    </>
  );
};

export default EmptyData;
