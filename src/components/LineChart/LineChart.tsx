import { Card, Col, Row } from "react-bootstrap";
import ExportButton from "../Button/ExportButton";
import { Line } from "react-chartjs-2";
import DateFilterDropDown from "../DateFilterDropdown/DateFilterDropDown";
import CustomSwitch from "../Swtich/CustomSwitch";
import ChartFilterDropDown from "../ChartFilterDropdown/ChartFilterDropDown";
import SaleSummary from "../SaleSummary/SaleSummaryCard";
import ProductPriceCard from "../ProductPriceCard/ProductPriceCard";
import { ChartArea } from "chart.js";

interface LineChartProps {
  chartTitle?: string;
  subTitle?: string;
  labels: string[];
  datasets: any;
  colors?: string[];
  showYearPicker?: boolean;
  showExport?: boolean;
  handleExport?: any;
  showLegend?: boolean;
  dateFilterType?: number;
  handleFilterTypeChange?: any;
  selectedFilterYear?: Date;
  handleFilterYearChange?: any;
  selectedStartDate?: Date;
  handleStartDateChange?: any;
  selectedEndDate?: Date;
  handleEndDateChange?: any;
  selectedMonth?: number;
  handleMonthChange?: any;
  showSwitch?: boolean;
  switchLeftLabel?: string;
  switchRightLabel?: string;
  showFilter?: boolean;
  numberOfSale?: string;
  period?: string;
  channel?: string;
  outlet?: string;
  numberOfProductInEcommerce?: string;
  hideFilterLabel?: boolean;
  showGradient?: boolean;
}

const LineChart: React.FC<LineChartProps> = ({
  chartTitle = "Chart",
  subTitle,
  labels = [],
  datasets,
  showYearPicker = false,
  showExport = false,
  handleExport,
  showLegend = true,
  dateFilterType = 1,
  handleFilterTypeChange,
  selectedFilterYear,
  handleFilterYearChange,
  selectedEndDate,
  handleEndDateChange,
  selectedStartDate,
  handleStartDateChange,
  selectedMonth,
  handleMonthChange,
  showSwitch = false,
  switchLeftLabel = "",
  switchRightLabel = "",
  showFilter = false,
  numberOfSale,
  period,
  channel,
  outlet,
  numberOfProductInEcommerce,
  hideFilterLabel = true,
  showGradient = false,
}) => {
  // chart options
  const lineChartOpts = {
    responsive: true,
    maintainAspectRatio: true,
    tooltips: {
      intersect: true,
    },
    hover: {
      intersect: true,
    },
    plugins: {
      filler: {
        propagate: false,
      },
      legend: {
        position: "top" as const,
        align: "end" as const,
        display: showLegend,
        labels: {
          usePointStyle: true,
          fontSize: 12,
        },
      },
      datalabels: { display: false },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
      y: {
        ticks: {
          stepSize: 100,
        },
        display: true,
        borderDash: [5, 5],
        grid: {
          color: "rgba(0,0,0,0.1)",
        },
      },
    },
  };

  let lineChartData;

  if (showGradient) {
    lineChartData = (canvas: any) => {
      const ctx = canvas.getContext("2d");

      var gradientStroke = ctx.createLinearGradient(0, 500, 0, 150);
      gradientStroke.addColorStop(0, "#833ab4");
      gradientStroke.addColorStop(0.5, "#1fa083");
      gradientStroke.addColorStop(1, "#3677e3");

      const aboveGradient = ctx.createLinearGradient(0, 500, 0, 150);
      aboveGradient.addColorStop(0, "rgba(31, 160, 131, 0)");
      aboveGradient.addColorStop(1, "rgba(31, 160, 131, 0.3)");

      return {
        labels: labels,
        datasets: datasets.map((dataset: any) => ({
          ...dataset,
          backgroundColor: gradientStroke,
          borderColor: gradientStroke,
          fill: {
            target: "origin",
            above: aboveGradient,
          },
        })),
      };
    };
  } else {
    lineChartData = { labels, datasets };
  }

  return (
    <Card className="dashboard-card">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between w-100 flex-wrap gap-2">
          <p className="chartTitle mb-0">{chartTitle}</p>
          <div className="d-flex gap-2 align-items-center flex-wrap">
            {showSwitch && (
              <CustomSwitch
                leftLabel={switchLeftLabel}
                rightLabel={switchRightLabel}
              />
            )}
            {showYearPicker && (
              <DateFilterDropDown
                handleFilterTypeChange={handleFilterTypeChange}
                selectedFilterType={dateFilterType}
                selectedFilterYear={selectedFilterYear}
                handleFilterYearChange={handleFilterYearChange}
                selectedStartDate={selectedStartDate}
                handleStartDateChange={handleStartDateChange}
                selectedEndDate={selectedEndDate}
                handleEndDateChange={handleEndDateChange}
                handleMonthChange={handleMonthChange}
                selectedMonth={selectedMonth}
              />
            )}
            {showExport && <ExportButton handleExport={handleExport} />}
            {showFilter && <ChartFilterDropDown hideLabel={hideFilterLabel} />}
          </div>
        </div>

        {subTitle && <p className="chartSubTitle">{subTitle}</p>}
        <div className="mt-3 mb-0 chartjs-chart line-chart-min-320">
          <Line data={lineChartData} options={lineChartOpts} />
        </div>

        <Row>
          {numberOfProductInEcommerce && (
            <Col md={12} className="p-0">
              <ProductPriceCard
                title="Number of Products in E- Commerce"
                price={numberOfProductInEcommerce}
              />
            </Col>
          )}
          {numberOfSale || channel || period || outlet ? (
            <Col md={12} className="p-0">
              <SaleSummary
                numberOfSale={numberOfSale}
                channel={channel}
                period={period}
                outlet={outlet}
              />
            </Col>
          ) : null}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default LineChart;
