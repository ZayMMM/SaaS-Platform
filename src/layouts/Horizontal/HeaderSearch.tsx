import { InputGroup, Form } from "react-bootstrap";
import AppFilterDropDown from "../../components/AppFilterDropdown/AppFilterDropDown";
import { useState } from "react";

interface HeaderSearchProps {
  menClass?: string;
}

const HeaderSearch = ({ menClass }: HeaderSearchProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <InputGroup className={`${menClass}`}>
        <Form.Control
          placeholder="Search Your Data Point..."
          aria-label="Search"
          aria-describedby="Search"
          className="menuSearchInput"
        />
        <InputGroup.Text id="searchDataPoint" onClick={() => toggleDropdown()}>
          <AppFilterDropDown
            dropdownOpen={dropdownOpen}
            toggleDropDown={toggleDropdown}
          />
        </InputGroup.Text>
      </InputGroup>
    </>
  );
};

export default HeaderSearch;
