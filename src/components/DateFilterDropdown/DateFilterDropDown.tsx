import { useState } from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import {
  dateFilterType,
  months,
  quartelyList,
} from "../../constants/common-util";
import Select from "react-select";
import CustomDatePicker from "../Date/CustomDatePicker";

interface DateFilterDropDownProps {
  selectedFilterType: number;
  handleFilterTypeChange: any;
  selectedFilterYear?: Date;
  handleFilterYearChange?: any;
  selectedStartDate?: Date;
  handleStartDateChange?: any;
  selectedEndDate?: Date;
  handleEndDateChange?: any;
  selectedMonth?: number;
  handleMonthChange?: any;
}

const DateFilterDropDown = ({
  selectedFilterType,
  handleFilterTypeChange,
  selectedFilterYear,
  handleFilterYearChange,
  selectedStartDate,
  handleStartDateChange,
  selectedEndDate,
  handleEndDateChange,
  selectedMonth,
  handleMonthChange,
}: DateFilterDropDownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  /*
   * toggle apps-dropdown
   */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
        <Dropdown.Toggle
          role="button"
          as="a"
          variant="primary"
          onClick={toggleDropdown}
        >
          <Button variant="outline-secondary" className="h-40">
            <i className="mdi mdi-calendar-range fs-16 pt-2px"></i>
            <span className="px-1"> 2023</span>
            <i className="mdi mdi-chevron-down"></i>
          </Button>
        </Dropdown.Toggle>
        <Dropdown.Menu className="p-3 date-filter-dropdown">
          <form>
            {dateFilterType.map((option) => (
              <div key={option.value}>
                {option.value === 1 && ( // 2 represents the "Monthly" option
                  <Form.Group className="mb-2">
                    <Form.Label>Select Year</Form.Label>
                    <CustomDatePicker
                      hideAddon={false}
                      dateFormat="yyyy"
                      timeCaption="time"
                      value={selectedFilterYear}
                      showYearPicker={true}
                      onChange={(date) => {
                        handleFilterYearChange(date);
                      }}
                    />
                  </Form.Group>
                )}
                <Form.Check
                  type="radio"
                  id={`custom-radio-${option.value}`}
                  name="customRadio"
                  label={option.label}
                  className="mb-2"
                  onChange={() => handleFilterTypeChange(option.value)}
                />

                {selectedFilterType === 2 &&
                  option.value === 2 && ( // 2 represents the "Monthly" option
                    <Form.Group className="mb-3 ms-2">
                      <Form.Label>Select Month</Form.Label>
                      <Select
                        className="react-select react-select-container"
                        classNamePrefix="react-select"
                        options={months}
                        onChange={(selectedOption) => {
                          const selectedMonthValue =
                            selectedOption?.value || null;
                          handleMonthChange(selectedMonthValue);
                        }}
                        defaultValue={months[0]}
                      />
                    </Form.Group>
                  )}
                {selectedFilterType === 3 &&
                  option.value === 3 && ( // 2 represents the "Monthly" option
                    <Form.Group className="mb-3 ms-2">
                      <Form.Label>Select Quarter</Form.Label>
                      <Select
                        className="react-select react-select-container"
                        classNamePrefix="react-select"
                        options={quartelyList}
                        defaultValue={quartelyList[0]}
                      />
                    </Form.Group>
                  )}
                {selectedFilterType === 4 &&
                  option.value === 4 && ( // 2 represents the "Monthly" option
                    <Row className="ms-2">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Start Date</Form.Label>
                          <CustomDatePicker
                            hideAddon={false}
                            dateFormat="dd MMM yyyy"
                            timeCaption="time"
                            value={selectedStartDate}
                            showYearPicker={false}
                            onChange={(date) => {
                              handleStartDateChange(date);
                            }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="">
                          <Form.Label>End Date</Form.Label>
                          <CustomDatePicker
                            hideAddon={false}
                            dateFormat="dd MMM yyyy"
                            timeCaption="time"
                            value={selectedEndDate}
                            showYearPicker={false}
                            onChange={(date) => {
                              handleEndDateChange(date);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  )}
              </div>
            ))}
          </form>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DateFilterDropDown;
