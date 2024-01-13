import { Col, Nav, Row, Tab } from "react-bootstrap";

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
          {(tabContents || []).map((tab, index) => {
            return (
              <Tab.Pane eventKey={tab.title} id={String(tab.id)} key={index}>
                <Row>
                  <Col sm="12">
                    <p className="mt-3">{tab.title}</p>
                  </Col>
                </Row>
              </Tab.Pane>
            );
          })}
        </Tab.Content>
      </Tab.Container>
    </>
  );
};

export default MainTab;
