import React from 'react';
import { appearence } from '../../constants';
import { NexusBadge } from '@nexus/react';

export const AppearenceComponent: React.FC = () => (
    <div className="nexus-body nexus-center-xs nexus-mt-1">
        <div className="nexus-row nexus-mt-1 nexus-mt-1">
            <div className="nexus-col-xs-1">
                <div className="nexus-row">
                    <div className="nexus-col-xs-4 nexus-center-xs">
                        <span>{appearence.default}</span>
                    </div>
                </div>
            </div>
            <div className="nexus-col-xs-2">
                <div className="nexus-row">
                    <div className="nexus-col-xs-1">
                        <NexusBadge>{appearence.oneDigit}</NexusBadge>
                    </div>
                    <div className="nexus-col-xs-1">
                        <NexusBadge>{appearence.twoDigit}</NexusBadge>
                    </div>
                    <div className="nexus-col-xs-1">
                        <NexusBadge>{appearence.threeDigit}</NexusBadge>
                    </div>
                    <div className="nexus-col-xs-1">
                        <NexusBadge>{appearence.fourDigit}</NexusBadge>
                    </div>
                </div>
            </div>
        </div>

        <div className="nexus-row nexus-mt-1 nexus-mt-1">
            <div className="nexus-col-xs-1">
                <div className="nexus-row">
                    <div className="nexus-col-xs-4 nexus-center-xs">
                        <span>{appearence.success}</span>
                    </div>
                </div>
            </div>
            <div className="nexus-col-xs-2">
                <div className="nexus-row">
                    <div className="nexus-col-xs-1">
                        <NexusBadge variant="success">{appearence.oneDigit}</NexusBadge>
                    </div>
                    <div className="nexus-col-xs-1">
                        <NexusBadge variant="success">{appearence.twoDigit}</NexusBadge>
                    </div>
                    <div className="nexus-col-xs-1">
                        <NexusBadge variant="success">{appearence.threeDigit}</NexusBadge>
                    </div>
                    <div className="nexus-col-xs-1">
                        <NexusBadge variant="success">{appearence.fourDigit}</NexusBadge>
                    </div>
                </div>
            </div>
        </div>

        <div className="nexus-row nexus-mt-1 nexus-mt-1">
            <div className="nexus-col-xs-1">
                <div className="nexus-row">
                    <div className="nexus-col-xs-4 nexus-center-xs">
                        <span>{appearence.warning}</span>
                    </div>
                </div>
            </div>
            <div className="nexus-col-xs-2">
                <div className="nexus-row">
                    <div className="nexus-col-xs-1">
                        <NexusBadge variant="warning">{appearence.oneDigit}</NexusBadge>
                    </div>
                    <div className="nexus-col-xs-1">
                        <NexusBadge variant="warning">{appearence.twoDigit}</NexusBadge>
                    </div>
                    <div className="nexus-col-xs-1">
                        <NexusBadge variant="warning">{appearence.threeDigit}</NexusBadge>
                    </div>
                    <div className="nexus-col-xs-1">
                        <NexusBadge variant="warning">{appearence.fourDigit}</NexusBadge>
                    </div>
                </div>
            </div>
        </div>

        <div className="nexus-row nexus-mt-1 nexus-mt-1">
            <div className="nexus-col-xs-1">
                <div className="nexus-row">
                    <div className="nexus-col-xs-4 nexus-center-xs">
                        <span>{appearence.error}</span>
                    </div>
                </div>
            </div>
            <div className="nexus-col-xs-2">
                <div className="nexus-row">
                    <div className="nexus-col-xs-1">
                        <NexusBadge variant="error">{appearence.oneDigit}</NexusBadge>
                    </div>
                    <div className="nexus-col-xs-1">
                        <NexusBadge variant="error">{appearence.twoDigit}</NexusBadge>
                    </div>
                    <div className="nexus-col-xs-1">
                        <NexusBadge variant="error">{appearence.threeDigit}</NexusBadge>
                    </div>
                    <div className="nexus-col-xs-1">
                        <NexusBadge variant="error">{appearence.fourDigit}</NexusBadge>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default AppearenceComponent;