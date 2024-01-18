import { InputGroup, Form } from "react-bootstrap";
import AppFilterDropDown from "../../components/AppFilterDropdown/AppFilterDropDown";
import { useState } from "react";

const HeaderSearch = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  /*
   * toggle language-dropdown
   */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <li className="menu-item">
        <li className="menu-item">
          <InputGroup className="menu-search">
            <Form.Control
              placeholder="Search Your Data Point..."
              aria-label="Search"
              aria-describedby="Search"
              className="menuSearchInput"
            />
            <InputGroup.Text
              id="searchDataPoint"
              onClick={() => toggleDropdown()}
            >
              <AppFilterDropDown
                dropdownOpen={dropdownOpen}
                toggleDropDown={toggleDropdown}
              />
            </InputGroup.Text>
          </InputGroup>
        </li>
      </li>
    </>
  );
};

export default HeaderSearch;
