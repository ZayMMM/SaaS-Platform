import { useState } from "react";
import LineChart from "../../../components/LineChart/LineChart";

const CompetitorProductSaleTrendLineChart = () => {
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
  const mySaleTrendData = {
    showLegend: false,
    chartTitle: "Sale Trend",
    subTitle: "",
    labels: [
      "2021-01",
      "2021-02",
      "2021-03",
      "2021-04",
      "2021-05",
      "2021-06",
      "2021-07",
      "2021-08",
    ],
    datasets: [
      {
        label: "Sale Trend",
        backgroundColor: "#1fa083",
        borderColor: "#1fa083",
        data: [400, 600, 500, 100, 500, 400, 700, 600],
      },
    ],
  };

  return (
    <>
      <LineChart
        {...mySaleTrendData}
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
        showFilter={true}
        numberOfSale="28,100"
        period="Aug, 2021"
        channel="E-Commerce"
        outlet="Shoppe"
      />
    </>
  );
};

export default CompetitorProductSaleTrendLineChart;
