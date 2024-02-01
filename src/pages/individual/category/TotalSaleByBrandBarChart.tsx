import { useState } from "react";
import BarChart from "../../../components/BarChart/BarChart";

const TotalSaleByBrandBarChart = () => {
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

  // chart data
  const totalSaleByEachBrandData = {
    showYearPicker: true,
    chartTitle: "Total Sales by each Brand",
    subTitle: "",
    labels: Array(1).fill(""),
    datasets: [
      {
        label: "Beauty Buffet Shop",
        backgroundColor: "#5b8ff9",
        borderColor: "#5b8ff9",
        data: [22000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "SHISEIDO",
        backgroundColor: "rgba(91, 144, 249, 0.5)",
        borderColor: "rgba(91, 144, 249, 0.5)",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "MISTINE",
        backgroundColor: "rgba(91, 144, 249, 0.5)",
        borderColor: "rgba(91, 144, 249, 0.5)",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "SRICHAND",
        backgroundColor: "rgba(91, 144, 249, 0.5)",
        borderColor: "rgba(91, 144, 249, 0.5)",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Clarins",
        backgroundColor: "rgba(91, 144, 249, 0.5)",
        borderColor: "rgba(91, 144, 249, 0.5)",
        data: [12000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 6",
        backgroundColor: "rgba(91, 144, 249, 0.5)",
        borderColor: "rgba(91, 144, 249, 0.5)",
        data: [10000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Estee Lauder",
        backgroundColor: "rgba(91, 144, 249, 0.5)",
        borderColor: "rgba(91, 144, 249, 0.5)",
        data: [8000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
    ],
  };
  return (
    <>
      <BarChart
        {...totalSaleByEachBrandData}
        showYearPicker={true}
        showExport={true}
        handleExport={handleExport}
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
        showSwitch={true}
        switchLeftLabel="Value"
        switchRightLabel="Volume"
      />
    </>
  );
};

export default TotalSaleByBrandBarChart;
