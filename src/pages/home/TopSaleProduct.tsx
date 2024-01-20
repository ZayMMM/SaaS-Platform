import { Card, Image } from "react-bootstrap";
import CustomDatePicker from "../../components/Date/CustomDatePicker";
import ExportButton from "../../components/Button/ExportButton";
import DateFilterDropDown from "../../components/DateFilterDropdown/DateFilterDropDown";
import { topSaleProductList } from "./data";
import { useState } from "react";
import ProductTable from "../../components/Product/ProductTable";

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
  showYearPicker?: boolean;
  showExport?: boolean;
  selectedDate?: Date;
  onDateChange?: (date: any) => void;
}

const TopSaleProduct = ({}) => {
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

  const handleExport = () => {
    alert("clicked export");
  };

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
        title="Top Sales By Product"
        showExport={true}
        handleExport={handleExport}
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

export default TopSaleProduct;
