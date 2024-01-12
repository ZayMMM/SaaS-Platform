import { Card } from "react-bootstrap";

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
}

const TopSaleProduct = ({ topSaleProductList }: TopSaleProductProps) => {
  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="header-title mb-3">Top Sales By Product</h4>
          <div className="table-responsive">
            <table className="table table-borderless table-hover table-nowrap table-centered m-0">
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
                      <td>{item.brand}</td>
                      <td>{item.brand}</td>
                      <td>{item.brand}</td>
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
