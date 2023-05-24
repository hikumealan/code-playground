import React from 'react';
import {
  NexusIcon
} from '@nexus/react';

import rectangle from '../../../../.storybook/assets/rectangle.svg';
import reactLogo from '../../../../.storybook/assets/react-logo.svg';
import angularLogo from '../../../../.storybook/assets/angular-logo.svg';
import wcLogo from '../../../../.storybook/assets/wc-logo.svg';
import FooterComponent from '../component/footer/footer';


export const IntroductionPage = () => {
  const fw = process.env.STORYBOOK_FRAMEWORK || 'angular';
  const FRAMEWORK = fw;
  const ANGULAR_URL = process.env.STORYBOOK_ANGULAR_URL;
  const REACT_URL = process.env.STORYBOOK_REACT_URL;
  const WC_URL = process.env.STORYBOOK_WC_URL;
  const STORYBOOK_DEPLOYMENT_DATE = process.env.STORYBOOK_DEPLOYMENT_DATE;

  return (
    <div>
      <div className="sb-introduction-container">
        <div className="nexus-row nexus-center-xs nexus-start-md">
          <div className="nexus-col-xs-4 nexus-ml-2 nexus-mt-3">
            <span
              className="nexus-h2"
              style={{ color: '#EAEBEB' }}>Nexus Design System</span>
          </div>
          <div className="nexus-col-xs-3 nexus-center-xs nexus-start-md nexus-mt-2 nexus-ml-2">
            <span className="nexus-h6" style={{ color: '#EAEBEB' }}>Ensure quality, reduce cost & increase speed to market for world class applications.</span>
          </div>
        </div>

        <div className='nexus-center-xs'>
          <div className='nexus-row nexus-around-xs'>
            <div className='nexus-col-xs-2 nexus-col-md-2 nexus-col-lg-4'>
              <div className='nexus-pt-5 nexus-pb-2'>
                <NexusIcon src={wcLogo}></NexusIcon>
              </div>
              <span style={{ color: '#EAEBEB' }} className="nexus-h6">
                Web Component
                <div>
                  <NexusIcon src={rectangle}></NexusIcon>
                </div>
                <div className='nexus-pt-2'>
                  <p className="nexus-body nexus-hidden-xs nexus-hidden-sm">Utilize framework agnostic components with the web component library.</p>
                </div>
              </span>
            </div>
            <div className='nexus-col-xs-1 nexus-col-md-2 nexus-col-lg-4'>
              <div className='nexus-pt-5 nexus-pb-2'>
                <NexusIcon src={angularLogo}></NexusIcon>
              </div>
              <span style={{ color: '#EAEBEB' }} className="nexus-h6">
                Angular
                <div>
                  <NexusIcon src={rectangle}></NexusIcon>
                </div>
                <div className='nexus-pt-2'>
                  <p className="nexus-body nexus-hidden-xs nexus-hidden-sm">Build your application using the Angular framework component library.</p>
                </div>
              </span>
            </div>
            <div className='nexus-col-xs-2 nexus-col-md-2 nexus-col-lg-4'>
              <div className='nexus-pt-5 nexus-pb-2'>
                <NexusIcon src={reactLogo}></NexusIcon>
              </div>
              <span style={{ color: '#EAEBEB' }} className="nexus-h6">
                React
                <div>
                  <NexusIcon src={rectangle}></NexusIcon>
                </div>
                <div className='nexus-pt-2'>
                  <p className="nexus-body nexus-hidden-xs nexus-hidden-sm">Build your application using React UI with the React component library.</p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
        }}>
          <FooterComponent setTransparency={true} />
        </div>
    </div>
  );
};