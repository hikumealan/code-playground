import React from 'react';
import { buttonState } from '../../constants';

const StateComponent: React.FC = () => {
  return (
    <div className="nexus-mt-2">
      <div className="nexus-row nexus-center-xs">
        <div className="nexus-col-xs-4 nexus-col-md-4 nexus-col-lg-2">
          <button data-testid="btnVariantDefault" className="nexus-btn nexus-mt-2">
            {buttonState.default}
          </button>
        </div>
        <div className="nexus-col-xs-4 nexus-col-md-4 nexus-col-lg-2">
          <button data-testid="btnVariantPrimary" className="nexus-btn-primary nexus-mt-2">
            {buttonState.primary}
          </button>
        </div>
        <div className="nexus-col-xs-4 nexus-col-md-4 nexus-col-lg-2">
          <button data-testid="btnVariantWarn" className="nexus-btn-warn nexus-mt-2">
            {buttonState.warn}
          </button>
        </div>
        <div className="nexus-col-xs-4 nexus-col-md-4 nexus-col-lg-2 nexus-mt-3">
          <a
            href="./?path=/docs/component-buttons-and-indicators-button--c-state"
            className="nexus-link nexus-ml-1 nexus-mr-2"
          >
            <button className="nexus-link">{buttonState.link}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StateComponent;
