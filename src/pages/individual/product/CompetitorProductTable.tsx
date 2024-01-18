import { Card, Image } from "react-bootstrap";
import ExportButton from "../../../components/Button/ExportButton";
import DateFilterDropDown from "../../../components/DateFilterDropdown/DateFilterDropDown";
import { topSaleProductList } from "../data";
import { useState } from "react";
import ProductTable from "../../../components/Product/ProductTable";

const CompetitorProductTable = ({}) => {
  const [selectedFilterType, setSelectedFilterType] = useState(1);
  const [selectedFilterYear, setSelectedFilterYear] = useState<Date>(
    new Date()
  );
  const [selectedFilterMonth, setSelectedFilterMonth] = useState<number>(1);
  const [selectedFilterStartDate, setSelectedFilterStartDate] = useState<Date>(
    new Date()
  );
  const [selectedFilterEndDate, setSelectedFilterEndDate] = useState<Date>(
    new Date()
  );

  const handleSelectedFilterTypeChange = (value: number) => {
    setSelectedFilterType(value);
  };

  const handleSelectedYearChange = (date: Date) => {
    if (date) {
      setSelectedFilterYear(date);
    }
  };

  const handleStartDateChange = (date: Date) => {
    if (date) {
      setSelectedFilterStartDate(date);
    }
  };

  const handleEndDateChange = (date: Date) => {
    if (date) {
      setSelectedFilterEndDate(date);
    }
  };

  const handleSelectedMonthChange = (value: number) => {
    if (value) {
      setSelectedFilterMonth(value);
    }
  };

  return (
    <>
      <ProductTable
        title="Competitor Products"
        showExport={true}
        showYearPicker={true}
        dateFilterType={selectedFilterType}
        handleFilterTypeChange={handleSelectedFilterTypeChange}
        selectedFilterYear={selectedFilterYear}
        handleFilterYearChange={handleSelectedYearChange}
        selectedStartDate={selectedFilterStartDate}
        handleStartDateChange={handleStartDateChange}
        selectedEndDate={selectedFilterEndDate}
        handleEndDateChange={handleEndDateChange}
        selectedMonth={selectedFilterMonth}
        handleMonthChange={handleSelectedMonthChange}
        productList={topSaleProductList}
      />
    </>
  );
};

export default CompetitorProductTable;
