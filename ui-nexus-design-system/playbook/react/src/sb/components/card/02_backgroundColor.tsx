import React from 'react';
import { NexusCard, NexusCardBody, NexusCardFooter } from '@nexus/react';
import { Link } from 'react-router-dom';
import { BackgroundColor } from '../../constants';

const BgColorComponent: React.FC = () => (
    <div className="nexus-row">
      <div className="nexus-col-xs-6 nexus-col-sm-6 nexus-col-md-6 nexus-col-lg-6 nexus-col-xl-6">
        <NexusCard data-testid="bg-color" bg-color="#BACAF7" clickable={true} height="316px">
          <NexusCardBody>
            <h2 data-testid="bg-color-overline" className="nexus-overline nexus-rhythm-1">{BackgroundColor.suggestedOffer}</h2>
            <h3 data-testid="bg-color-body" className="nexus-h4 nexus-rhythm-1">{BackgroundColor.offerDetail}</h3>
          </NexusCardBody>
          <NexusCardFooter>
            <Link to="" data-testid="bg-color-btn-Enroll" className="nexus-btn nexus-btn-fluid">{BackgroundColor.enroll}</Link>
          </NexusCardFooter>
        </NexusCard>
      </div>
    </div>
);

export default BgColorComponent;
