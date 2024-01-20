import { Card, Col, Image, Row } from "react-bootstrap";
import DateFilterDropDown from "../DateFilterDropdown/DateFilterDropDown";
import ExportButton from "../Button/ExportButton";
import ProductSummary from "./ProductSummaryCard";

interface ProductTableProps {
  title: string;
  showYearPicker?: boolean;
  showExport?: boolean;
  dateFilterType?: number;
  handleFilterTypeChange?: any;
  selectedFilterYear?: Date;
  handleFilterYearChange?: any;
  selectedStartDate?: Date;
  handleStartDateChange?: any;
  selectedEndDate?: Date;
  handleEndDateChange?: any;
  selectedMonth?: number;
  handleMonthChange?: any;
  productList?: any;
  currentPrice?: string;
  currentAvailability?: string;
  totalSaleValue?: string;
  totalSalePercent?: string;
}

const MyProductTable = ({
  title,
  showYearPicker,
  showExport,
  dateFilterType = 1,
  handleFilterTypeChange,
  selectedFilterYear,
  handleFilterYearChange,
  selectedStartDate,
  handleStartDateChange,
  selectedEndDate,
  handleEndDateChange,
  selectedMonth,
  handleMonthChange,
  productList,
  currentPrice,
  currentAvailability,
  totalSaleValue,
  totalSalePercent,
}: ProductTableProps) => {
  return (
    <>
      <Card className="dashboard-card h-100">
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between w-100 flex-wrap gap-2">
            <p className="chartTitle mb-0">{title}</p>
            <div className="d-flex gap-2 align-items-center">
              {showYearPicker && (
                <DateFilterDropDown
                  handleFilterTypeChange={handleFilterTypeChange}
                  selectedFilterType={dateFilterType}
                  selectedFilterYear={selectedFilterYear}
                  handleFilterYearChange={handleFilterYearChange}
                  selectedStartDate={selectedStartDate}
                  handleStartDateChange={handleStartDateChange}
                  selectedEndDate={selectedEndDate}
                  handleEndDateChange={handleEndDateChange}
                  handleMonthChange={handleMonthChange}
                  selectedMonth={selectedMonth}
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
                {(productList || []).map((item: any, i: number) => {
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
            {currentPrice && (
              <Col sm={6} lg={4}>
                <ProductSummary title="Current Price" value={currentPrice} />
              </Col>
            )}
            {currentAvailability && (
              <Col sm={6} lg={4}>
                <ProductSummary
                  title="Current Availability"
                  value={currentAvailability}
                />
              </Col>
            )}
            {totalSaleValue && (
              <Col sm={6} lg={4}>
                <ProductSummary
                  title="Total Sales"
                  value={totalSaleValue}
                  percent={totalSalePercent}
                />
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyProductTable;
