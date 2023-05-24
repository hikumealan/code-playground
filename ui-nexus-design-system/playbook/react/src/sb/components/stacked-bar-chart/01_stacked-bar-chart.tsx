import React from 'react';
import { NexusStackedBarChart } from '@nexus/react';

import { stackedBarChartData } from '../../constants';


const StackedBarChart: React.FC = (props) => {


    return <NexusStackedBarChart  {...props} chartId="mynexusStackedBarChart" chartData={stackedBarChartData} responsive tooltips />
}

export default StackedBarChart;


