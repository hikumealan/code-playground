import React from 'react';
import { darkTheme } from '../../constants';
import { Link } from 'react-router-dom';

const DarkThemeComponent: React.FC = () => {
  return (
    <div className="nexus-row nexus-center-xs">
      <div className="nexus-col-xs-4 nexus-col-md-8">
        <div className="nexus-theme-dark nexus-pt-2 nexus-pb-2">
          <div className="nexus-row nexus-center-xs">
            <div className="nexus-col-xs-4 nexus-col-md-2 nexus-mt-2">
              <button data-testid="button-theme-dark-default" className="nexus-btn nexus-ml-1">
                {darkTheme.default}
              </button>
            </div>
            <div className="nexus-col-xs-4 nexus-col-md-2 nexus-mt-2">
              <button
                data-testid="button-theme-dark-primary"
                className="nexus-btn nexus-btn-primary nexus-ml-1 nexus-mr-1"
              >
                {darkTheme.primary}
              </button>
            </div>
            <div className="nexus-col-xs-4 nexus-col-md-2 nexus-mt-2">
              <button
                data-testid="button-theme-dark-primary"
                className="nexus-btn nexus-btn-warn nexus-ml-1 nexus-mr-1"
              >
                {darkTheme.warn}
              </button>
            </div>
            <div className="nexus-col-xs-4 nexus-col-md-2 nexus-mt-3">
              <a
                href="./?path=/docs/component-buttons-and-indicators-button--d-dark-theme"
                data-testid="theme-dark-nexus-link"
                className="nexus-link nexus-ml-1 nexus-mr-2"
              >
                {darkTheme.link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkThemeComponent;
