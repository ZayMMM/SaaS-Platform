import { useState } from "react";
import LineChart from "../../../components/LineChart/LineChart";
import BarChart from "../../../components/BarChart/BarChart";

const SkuByBrandBarChart = () => {
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
  const numberOfSkuByBrandData = {
    chartTitle: "Number of SKU By Brand",
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
        {...numberOfSkuByBrandData}
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
      />
    </>
  );
};

export default SkuByBrandBarChart;
