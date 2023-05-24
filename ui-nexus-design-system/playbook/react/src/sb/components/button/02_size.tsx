import React from 'react';
import { buttonSizeVariant } from '../../constants';


const SizeComponent: React.FC = () => {
    return (
        <div className="nexus-center-xs nexus-mt-2">
            <button data-testid="nexus-button-medium" className="nexus-btn nexus-btn-medium">{buttonSizeVariant.medium}</button>
            <div className="nexus-mt-2 nexus-mb-2"></div>

            <button data-testid="nexus-button-medium" className="nexus-btn nexus-btn-primary nexus-btn-large">{buttonSizeVariant.large}</button>
            <div className="nexus-mt-2 nexus-mb-2"></div>

            <div className="nexus-row nexus-around-xs">
                <div className="nexus-col-xs-3">
                    <button data-testid="nexus-button-primary" className="nexus-btn nexus-btn-fluid nexus-around-xs">{buttonSizeVariant.fluid}</button>
                </div>
            </div>
        </div>
    );
};

export default SizeComponent;
