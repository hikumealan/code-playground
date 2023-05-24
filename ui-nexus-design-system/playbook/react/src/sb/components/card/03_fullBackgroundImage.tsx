import React from 'react';
import { NexusCard, NexusCardBody } from '@nexus/react';
import { Link } from 'react-router-dom';
import { FullBackground } from '../../constants';

const FullBackgroundImageComponent: React.FC = () => (

    <div className="nexus-row">
      <div className="nexus-col-xs-4 nexus-col-sm-4 nexus-col-md-6 nexus-col-lg-8 nexus-col-xl-8">
        <NexusCard data-testid="full-bg-image" bg-image={FullBackground.cardBgImage} height="316px" clickable={true}>
          <Link to="" className="nexus-visually-hidden">{FullBackground.readMore}</Link>
          <NexusCardBody>
            <h2 data-testid="full-bg-image-overline" className="nexus-overline nexus-rhythm-1">{FullBackground.nextStep}</h2>
            <h3 data-testid="full-bg-image-body" className="nexus-h6 nexus-rhythm-1">{FullBackground.detail}</h3>
          </NexusCardBody>
        </NexusCard>
      </div>
    </div>
);

export default FullBackgroundImageComponent;
