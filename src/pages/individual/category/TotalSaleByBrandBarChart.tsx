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
        backgroundColor: "#5B8FF9",
        borderColor: "#5B8FF9",
        data: [22000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "SHISEIDO",
        backgroundColor: "#5AD8A6",
        borderColor: "#5AD8A6",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "MISTINE",
        backgroundColor: "#F6BD16",
        borderColor: "#F6BD16",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "SRICHAND",
        backgroundColor: "#E8684A",
        borderColor: "#E8684A",
        data: [16000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Clarins",
        backgroundColor: "#6DC8EC",
        borderColor: "#6DC8EC",
        data: [12000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Item 6",
        backgroundColor: "#5D7092",
        borderColor: "#5D7092",
        data: [10000],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Estee Lauder",
        backgroundColor: "#D235CC",
        borderColor: "#D235CC",
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
