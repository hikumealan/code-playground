import React from 'react';
import { loaderOverlay } from '../../constants';
import { NexusLoader } from '@nexus/react';

const LoaderOverButtonComponent: React.FC = () => (
  <div className='nexus-center-xs nexus-pt-5'>
    <button className="nexus-btn nexus-btn-large nexus-btn-primary">
      <NexusLoader show={loaderOverlay.show}></NexusLoader>
      {loaderOverlay.text}
    </button>
  </div>
);

export default LoaderOverButtonComponent;
