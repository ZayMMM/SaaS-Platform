import DonutChart from "../../../components/DonutChart/DonutChart";
import { myStockAvailabilityData } from "../data";

const CompetitorStockAvailability = () => {
  return (
    <>
      <DonutChart
        {...myStockAvailabilityData}
        showLegend={true}
        showFilter={true}
      />
    </>
  );
};

export default CompetitorStockAvailability;
