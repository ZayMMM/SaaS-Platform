import { useState } from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";

interface ChartFilterDropDownProps {
  hideLabel?: boolean;
}

interface MenuItem {
  title: string;
  children: { value: string; label: string }[];
}

const ChartFilterDropDown = ({
  hideLabel = false,
}: ChartFilterDropDownProps) => {
  const menuItems: MenuItem[] = [
    {
      title: "Ecommerce Site",
      children: [
        { value: "1", label: "Lazada.co.th" },
        { value: "2", label: "Shopee.co.th" },
      ],
    },
    {
      title: "Brand",
      children: [
        { value: "-1", label: "Select All Brand" },
        { value: "1", label: "Beauty Buffet Shop" },
        { value: "2", label: "Clarins" },
        { value: "3", label: "Clnique" },
      ],
    },
  ];

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  /*
   * toggle apps-dropdown
   */
  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <Dropdown show={dropdownOpen} onToggle={toggleDropDown}>
        <Dropdown.Toggle
          id="dropdown-notification"
          role="button"
          as="a"
          onClick={toggleDropDown}
        >
          <Button
            variant="outline-secondary"
            className="h-40 align-items-center d-flex gap-1"
          >
            <i className="fe-filter fs-16"></i>
            {!hideLabel && <span className="px-1"> Filter</span>}
            <i className="mdi mdi-chevron-down"></i>
          </Button>
        </Dropdown.Toggle>
        <Dropdown.Menu className="p-3 dropdown-menu chart-filter-dropdown-menu dropdown-menu-animated dropdown-lg py-0 ">
          <Row className="mb-3 mainFilterDropDown">
            <Col sm={12}>
              <h5 className="mb-0 pb-0 filterTitle">Apply Filters</h5>

              {menuItems.map((menuItem) => (
                <div key={menuItem.title}>
                  <h5 className="filterSubTitle">{menuItem.title}</h5>
                  {menuItem.children.map((child) => (
                    <Form.Group
                      key={child.value}
                      className="mb-2"
                      controlId={`${menuItem.title}-${child.value}`}
                    >
                      <Form.Check
                        label={child.label}
                        id={`check${child.value}`}
                      />
                    </Form.Group>
                  ))}
                  <hr className="mt-1 mb-1" />
                </div>
              ))}
            </Col>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="unitPriceStartFrom" className="form-label">
                  Unit Price Start From
                </Form.Label>
                <Form.Control type="text" name="text" id="unitPriceStartFrom" />
                <Form.Text>0.03 USD</Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="unitPriceEndIn" className="form-label">
                  Unit Price End In
                </Form.Label>
                <Form.Control type="text" name="text" id="unitPriceEndIn" />
                <Form.Text>26.32 USD</Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={6} className="px-1 mb-2">
              <Button variant="outline-danger w-100" onClick={toggleDropDown}>
                Cancel
              </Button>
            </Col>
            <Col sm={6} className="px-1 mb-2">
              <Button variant="primary w-100">Apply Filters</Button>
            </Col>
          </Row>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default ChartFilterDropDown;
