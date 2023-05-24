import React from "react";
import { NexusBarChart } from "@nexus/react";

import { barChartData } from '../../constants';


const BarChartsComponent: React.FC = (props) => {

    const chartData = barChartData;

    return <NexusBarChart
        {...props}
        chartData={chartData}
        responsive={true} />;
}

export default BarChartsComponent;