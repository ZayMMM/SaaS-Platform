import { Col, Nav, Row, Tab } from "react-bootstrap";
import Category from "./Category";
import Brand from "./Brand";
import Product from "./Product";

interface TabContentType {
  id: number;
  title: string;
}

const MainTab = () => {
  const tabContents: TabContentType[] = [
    {
      id: 1,
      title: "Category",
    },
    {
      id: 2,
      title: "Brand",
    },
    {
      id: 3,
      title: "Product",
    },
  ];

  const categoryOptions = [
    { value: "-1", label: "Select One" },
    { value: "1", label: "Category 1" },
    { value: "2", label: "Category 2" },
    { value: "3", label: "Category 3" },
  ];

  const subCategoryOptions = [
    { value: "-1", label: "Select One" },
    { value: "1", label: "Sub Category 1" },
    { value: "2", label: "Sub Category 2" },
    { value: "3", label: "Sub Category 3" },
  ];

  const brandOptions = [
    { value: "-1", label: "Select One" },
    { value: "1", label: "Brand 1" },
    { value: "2", label: "Brand 2" },
    { value: "3", label: "Brand 3" },
  ];

  const productOptions = [
    { value: "-1", label: "Select One" },
    { value: "1", label: "Product 1" },
    { value: "2", label: "Product 2" },
    { value: "3", label: "Product 3" },
  ];
  return (
    <>
      <Tab.Container defaultActiveKey="Category">
        <Nav
          variant="tabs"
          className="nav-bordered justify-content-center individual-nav-tab"
          as="ul"
        >
          {" "}
          {(tabContents || []).map((tab, index) => {
            return (
              <Nav.Item key={index} as="li" className="ml-5">
                <Nav.Link
                  className="cursor-pointer"
                  href="#"
                  eventKey={tab.title}
                >
                  {tab.title}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="Category" id="1" key="1">
            <Category
              categoryOptions={categoryOptions}
              subCategoryOptions={subCategoryOptions}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="Brand" id="2" key="2">
            <Brand
              categoryOptions={categoryOptions}
              subCategoryOptions={subCategoryOptions}
              brandOptions={brandOptions}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="Product" id="3" key="3">
            <Row>
              <Product
                categoryOptions={categoryOptions}
                subCategoryOptions={subCategoryOptions}
                brandOptions={brandOptions}
                productOptions={productOptions}
              />
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
};

export default MainTab;
