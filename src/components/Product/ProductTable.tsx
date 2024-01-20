import { Card, Image } from "react-bootstrap";
import DateFilterDropDown from "../DateFilterDropdown/DateFilterDropDown";
import ExportButton from "../Button/ExportButton";

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
}

const ProductTable = ({
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
}: ProductTableProps) => {
  return (
    <>
      <Card className="dashboard-card h-100">
        <Card.Body className="pb-1">
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
                  <th>E-Commerce Site</th>
                  <th>Image</th>
                  <th>Sale(USD)</th>
                  <th>Price(USD)</th>
                </tr>
              </thead>
              <tbody>
                {(productList || []).map((item: any, i: number) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.product}</td>
                      <td>
                        {item.brand}
                        <br />
                        <span className="badge bg-soft-success text-success">
                          Customer
                        </span>
                      </td>
                      <td>{item.brand}</td>
                      <td>
                        {item.image ? (
                          <Image src={item.image} className="rounded" />
                        ) : null}
                      </td>
                      <td>{item.brand}</td>
                      <td>{item.brand}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductTable;
