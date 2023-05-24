import React from 'react';
import { NexusPieChart } from '@nexus/react';
import { pieChartData } from '../../constants';

const PieCharts: React.FC = (props) => {

    return <NexusPieChart  {...props} chartData={pieChartData} responsive tooltips legendMetric="artist" valueMetric="units" />
}

export default PieCharts;
