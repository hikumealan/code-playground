import React from 'react';
import { progressBarReport } from '../../constants';
import { NexusCard, NexusCardBody, NexusCardHeader, NexusCardHeaderTitle, NexusProgressBar } from '@nexus/react';

const ProgressBarReportsComponent: React.FC = () => {

    return (

        <NexusCard clickable={false}>
            <NexusCardHeader>
                <NexusCardHeaderTitle>System Performance</NexusCardHeaderTitle>
            </NexusCardHeader>
            <NexusCardBody>

                <div className="nexus-row">
                    <div className="nexus-col-md-2">
                        <h3 className="nexus-h5">{progressBarReport.processor}</h3>
                    </div>
                    <div className="nexus-col-md-1">
                        <NexusProgressBar value={progressBarReport.processorvalue} circle={true}>
                            <div className="nexus-pl-3 nexus-pt-4">{progressBarReport.processorvalue}%</div>
                        </NexusProgressBar>
                    </div>

                    <div className="nexus-col-md-2 nexus-pl-4">
                        <h3 className="nexus-h5">{progressBarReport.memory}</h3>
                    </div>
                    <div className="nexus-col-md-1">
                        <NexusProgressBar value={progressBarReport.memoryValue} circle={true}>
                            <div className="nexus-pl-3 nexus-pt-4">{progressBarReport.memoryValue}%</div>
                        </NexusProgressBar>
                    </div>
                </div>

                <div className="nexus-row nexus-mt-4">
                    <div className="nexus-col-md-2">
                        <h3 className="nexus-h5">{progressBarReport.graphics}</h3>
                    </div>
                    <div className="nexus-col-md-1">
                        <NexusProgressBar value={progressBarReport.graphicsValue} circle={true}>
                            <div className="nexus-pl-3 nexus-pt-4">{progressBarReport.graphicsValue}%</div>
                        </NexusProgressBar>
                    </div>

                    <div className="nexus-col-md-2 nexus-pl-4">
                        <h3 className="nexus-h5">{progressBarReport.primaryHDD}</h3>
                    </div>
                    <div className="nexus-col-md-1">
                        <NexusProgressBar value={progressBarReport.primaryHDDValue} circle={true}>
                            <div className="nexus-pl-3 nexus-pt-4">{progressBarReport.primaryHDDValue}%</div>
                        </NexusProgressBar>
                    </div>
                </div>

            </NexusCardBody>
        </NexusCard>
    );
};

export default ProgressBarReportsComponent;
