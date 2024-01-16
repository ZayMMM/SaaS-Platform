import React from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";

interface AppFilterDropDownProps {
  dropdownOpen: boolean;
  toggleDropDown: any;
}

interface MenuItem {
  title: string;
  children: { value: string; label: string }[];
}

const AppFilterDropDown: React.FC<AppFilterDropDownProps> = ({
  dropdownOpen,
  toggleDropDown,
}: AppFilterDropDownProps) => {
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
        { value: "4", label: "Estee Lauder" },
        { value: "5", label: "Christian Dior" },
        { value: "6", label: "Chanel" },
        { value: "7", label: "Burberry" },
        { value: "8", label: "Vasceline" },
      ],
    },
    {
      title: "Product Category",
      children: [
        { value: "1", label: "Body Care Products" },
        { value: "2", label: "Bidy Enhancement" },
        { value: "3", label: "Body Shower And Care For Hands & Feets" },
        { value: "4", label: "Body Washing" },
        { value: "5", label: "Box & Cosmetics Bag" },
      ],
    },
  ];

  return (
    <>
      <Dropdown show={dropdownOpen} onToggle={toggleDropDown}>
        <Dropdown.Toggle
          id="dropdown-notification"
          role="button"
          as="a"
          onClick={toggleDropDown}
          className="d-none"
        >
          Drop down
        </Dropdown.Toggle>
        <Dropdown.Menu className="p-3 dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0 ">
          <Row className="mb-3 mainFilterDropDown">
            <Col sm={12}>
              <h5 className="mb-0 pb-0">Apply Filters</h5>

              {menuItems.map((menuItem) => (
                <div key={menuItem.title}>
                  <h5 className="">{menuItem.title}</h5>
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
          </Row>
          <Row className="mb-3">
            <Col sm={6} className="px-1">
              <Button variant="outline-danger w-100">Cancel</Button>
            </Col>
            <Col sm={6} className="px-1 ">
              <Button variant="primary w-100">Apply Filters</Button>
            </Col>
          </Row>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default AppFilterDropDown;
