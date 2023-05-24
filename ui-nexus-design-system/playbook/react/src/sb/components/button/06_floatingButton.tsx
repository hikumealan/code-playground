import { NexusIcon } from '@nexus/react';
import React from 'react';
import { floatingButton } from '../../constants';


const FloatingButtonComponent: React.FC = () => {
    return (
        <div className="nexus-mt-5">
            <div className="nexus-row nexus-center-xs">
                <div className="nexus-col-xs-4 nexus-col-md-4">
                    <div className="nexus-row nexus-center-xs">
                        <div className="nexus-col-xs-2  nexus-col-md-4">
                            <button data-testid="nexus-button-with-icon" className="nexus-btn-icon">
                                <NexusIcon src="./assets/icons/action/ic_settings_24px.svg"></NexusIcon>
                                <span className="nexus-visually-hidden">Settings</span>
                            </button>
                        </div>
                        <div className="nexus-col-xs-2">
                            <h5 className="nexus-h5">{floatingButton.icon}</h5>
                        </div>
                    </div>

                </div>
                <div className="nexus-col-xs-4 nexus-col-md-4">
                    <div className="nexus-row nexus-center-xs">
                        <div className="nexus-col-xs-2 nexus-col-md-4">
                            <button data-testid="nexus-btn-floating" className="nexus-fab">
                                <NexusIcon src="./assets/icons/action/ic_settings_24px.svg"></NexusIcon>
                                <span className="nexus-visually-hidden">Settings</span>
                            </button>
                        </div>
                        <div className="nexus-col-xs-2 nexus-col-md-4">
                            <h5 className="nexus-h5">{floatingButton.floatingIconButton}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FloatingButtonComponent;
