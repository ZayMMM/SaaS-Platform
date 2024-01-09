import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

// components
import HyperDatepicker from "../../../components/Datepicker";

import Statistics from "./Statistics";
import RevenueChart from "./RevenueChart";
import SalesAnalyticsChart from "./SalesAnalyticsChart";
import UsersBalances from "./UsersBalances";
import RevenueHistory from "./RevenueHistory";

import { balances, revenueHistory } from "./data";
import MarketShareLineChart from "./MarketShareLineChart";

const Dashboard1 = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  /*
   * handle date change
   */
  const onDateChange = (date: Date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <>
      <Row className="mt-4">
        <Col lg={12}>
          <MarketShareLineChart />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <UsersBalances balances={balances} />
        </Col>
        <Col xl={6}>
          <RevenueHistory revenueHistory={revenueHistory} />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard1;
