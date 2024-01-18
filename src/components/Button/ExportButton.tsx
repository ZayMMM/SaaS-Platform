import { Button } from "react-bootstrap";

const ExportButton = (props: any) => {
  return (
    <Button variant="outline-secondary" className="h-40">
      <i className="fe-download-cloud fs-16 pt-2px"></i>
      <span className="px-1 fs-14">Export</span>
      <i className="fas fa-caret-down fs-16"></i>
    </Button>
  );
};

export default ExportButton;
