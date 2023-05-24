import React from 'react';
import { size } from '../../constants';

import { NexusToggle } from '@nexus/react';

const SwitchSize: React.FC = () => {
  return (
    <>
      <div className="nexus-row nexus-around-xs">
        <div className="nexus-col-lg-4">
          <p className="nexus-h6">{size.xs}</p>
          <NexusToggle data-testid="toggle-size-xs" size="xs" />
        </div>
        <div className="nexus-col-lg-4">
          <p className="nexus-h6">{size.sm}</p>
          <NexusToggle data-testid="toggle-size-sm" size="sm" />
        </div>
        <div className="nexus-col-lg-4">
          <p className="nexus-h6">{size.md}</p>
          <NexusToggle data-testid="toggle-size-md" size="md" />
        </div>
        <div className="nexus-col-lg-4">
          <p className="nexus-h6">{size.lg}</p>
          <NexusToggle data-testid="toggle-size-lg" size="lg" />
        </div>
        <div className="nexus-col-lg-4">
          <p className="nexus-h6">{size.xl}</p>
          <NexusToggle data-testid="toggle-size-xl" size="xl" />
        </div>
      </div>
    </>
  );
};

export default SwitchSize;
