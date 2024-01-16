import { Card, Col, Image, Row } from "react-bootstrap";
import CustomDatePicker from "../../components/Date/CustomDatePicker";
import ExportButton from "../../components/Button/ExportButton";
import ProductSummary from "./ProductSummaryCard";

interface MyProductProps {
  title: string;
  productList: {
    id: number;
    product: string;
    brand: string;
    category: string;
    image?: string;
  }[];
  showYearPicker?: boolean;
  showExport?: boolean;
  selectedDate?: Date;
  onDateChange?: (date: any) => void;
}

const MyProductList = ({
  title,
  productList,
  selectedDate,
  onDateChange,
  showYearPicker = false,
  showExport = false,
}: MyProductProps) => {
  return (
    <>
      <Card className="dashboard-card h-100">
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between w-100">
            <h4 className="header-title fw-600">{title}</h4>
            <div className="d-flex gap-2 align-items-center">
              {showYearPicker && (
                <CustomDatePicker
                  hideAddon={false}
                  dateFormat="yyyy"
                  timeCaption="time"
                  value={selectedDate}
                  showYearPicker={true}
                  onChange={(date) => {
                    if (onDateChange) {
                      onDateChange(date);
                    }
                  }}
                />
              )}
              {showExport && <ExportButton />}
            </div>
          </div>
          <div className="table-responsive mt-4 table-vertical-scroll">
            <table className="table table-borderless table-hover table-nowrap table-centered m-0 ">
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th>Brand</th>
                  <th>Category</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {(productList || []).map((item, i) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.product}</td>
                      <td>{item.brand}</td>
                      <td>
                        <span className="badge bg-soft-success text-success">
                          {item.brand}
                        </span>
                      </td>
                      <td>
                        {item.image ? (
                          <Image src={item.image} className="rounded" />
                        ) : null}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Row className="mt-3">
            <Col sm={4} className="m-0 p-1">
              <ProductSummary title="Current Price" value="5.14" />
            </Col>
            <Col sm={4} className="p-1">
              <ProductSummary title="Current Availability" value="In Stock" />
            </Col>
            <Col sm={4} className="p-1">
              <ProductSummary
                title="Total Sales"
                value="144,434"
                percent="15%"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyProductList;
