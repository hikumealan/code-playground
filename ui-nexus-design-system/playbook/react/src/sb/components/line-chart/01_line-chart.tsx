import React from 'react';
import { NexusLineChart } from '@nexus/react';

import { lineChartData, dt, msd } from '../../constants';


const LineCharts: React.FC = (props) => {

    const data = lineChartData

    return <NexusLineChart  {...props} chartData={data} responsive />
}

export default LineCharts;