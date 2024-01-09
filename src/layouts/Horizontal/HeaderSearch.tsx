import { InputGroup, Form } from "react-bootstrap";

const HeaderSearch = () => {
  return (
    <li className="menu-item">
      <li className="menu-item">
        <InputGroup className="menu-search">
          <Form.Control
            placeholder="Search Your Data Point..."
            aria-label="Search"
            aria-describedby="Search"
            className="menuSearchInput"
          />
          <InputGroup.Text id="searchDataPoint">
            <i className="mdi mdi-filter-variant"></i>
          </InputGroup.Text>
        </InputGroup>
      </li>
    </li>
  );
};

export default HeaderSearch;
