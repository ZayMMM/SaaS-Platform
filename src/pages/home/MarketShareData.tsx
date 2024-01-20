import { useState } from "react";
import LineChart from "../../components/LineChart/LineChart";

const MarketShareData = () => {
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
  const lineChartData = {
    chartTitle: "Market Share",
    subTitle: "Top 15 Products In Market",
    labels: ["2021-01", "2021-02", "2021-03", "2021-04", "2021-05"],
    datasets: [
      {
        label: "Item 1",
        backgroundColor: "#1fa083",
        borderColor: "#1fa083",
        data: [100, 300, 200, 500, 700, 800],
      },
      {
        label: "Item 2",
        backgroundColor: "#5AD8A6",
        borderColor: "#5AD8A6",
        data: [200, 500, 100, 800, 700, 300],
      },
      {
        label: "Item 3",
        backgroundColor: "#E8684A",
        borderColor: "#E8684A",
        data: [500, 300, 600, 300, 800, 200],
      },
      {
        label: "Item 4",
        backgroundColor: "#870182",
        borderColor: "#870182",
        data: [100, 400, 200, 600, 800, 500],
      },
      {
        label: "Item 5",
        backgroundColor: "#F6BD16",
        borderColor: "#F6BD16",
        data: [300, 600, 500, 400, 800, 700],
      },
      {
        label: "Item 6",
        backgroundColor: "#C78F8F",
        borderColor: "#C78F8F",
        data: [400, 200, 100, 700, 400, 100],
      },
      {
        label: "Item 7",
        backgroundColor: "#1fa083",
        borderColor: "#1fa083",
        data: [300, 500, 100, 800, 700, 800],
      },
      {
        label: "Item 8",
        backgroundColor: "#5AD8A6",
        borderColor: "#5AD8A6",
        data: [200, 500, 100, 800, 700, 300],
      },
      {
        label: "Item 9",
        backgroundColor: "#E8684A",
        borderColor: "#E8684A",
        data: [1000, 900, 600, 100, 400, 200],
      },
      {
        label: "Item 10",
        backgroundColor: "#870182",
        borderColor: "#870182",
        data: [800, 700, 600, 600, 800, 500],
      },
      {
        label: "Item 11",
        backgroundColor: "#D235CC",
        borderColor: "#F6BD16",
        data: [500, 600, 900, 400, 300, 100],
      },
      {
        label: "Item 12",
        backgroundColor: "#C78F8F",
        borderColor: "#C78F8F",
        data: [400, 200, 100, 700, 400, 100],
      },
    ],
  };

  return (
    <>
      <LineChart
        {...lineChartData}
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
      />
    </>
  );
};

export default MarketShareData;
