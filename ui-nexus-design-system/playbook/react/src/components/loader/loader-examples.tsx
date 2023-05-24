import React from 'react';

import { NexusLoader } from '@nexus/react';

const LoaderExampleComponent: React.FC = () => (
  <button className="nexus-btn">
    <NexusLoader show={true}></NexusLoader>
    Click me!
  </button>
);

export default LoaderExampleComponent;
