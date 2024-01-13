import { Card, Image } from "react-bootstrap";
import CustomDatePicker from "../../components/Date/CustomDatePicker";
import ExportButton from "../../components/Button/ExportButton";

interface TopSaleProductProps {
  topSaleProductList: {
    id: number;
    product: string;
    brand: string;
    ecommerceSite: string;
    image?: string;
    saleUsd?: string;
    priceUsd?: string;
  }[];
  showYearPicker?: boolean;
  showExport?: boolean;
  selectedDate?: Date;
  onDateChange?: (date: any) => void;
}

const TopSaleProduct = ({
  topSaleProductList,
  selectedDate,
  onDateChange,
  showYearPicker = false,
  showExport = false,
}: TopSaleProductProps) => {
  return (
    <>
      <Card>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between w-100">
            <h4 className="header-title fw-600">Top Sales By Product</h4>
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
                  <th>E-Commerce Site</th>
                  <th>Image</th>
                  <th>Sale(USD)</th>
                  <th>Price(USD)</th>
                </tr>
              </thead>
              <tbody>
                {(topSaleProductList || []).map((item, i) => {
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

export default TopSaleProduct;
