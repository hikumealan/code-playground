import React from 'react';
import { size } from '../../constants';

import { NexusToggle } from '@nexus/react';

const ButtonSizeComponent: React.FC = () => {
  return (
    <>
      <div className="nexus-row">
        <div className="nexus-col-lg-2">
          <p className="nexus-h6">{size.xs}</p>
          <NexusToggle data-testid="toggle-btn-size-xs" type="button" label-inactive="hide" label-active="show" size="xs" />
        </div>
        <div className="nexus-col-lg-2">
          <p className="nexus-h6">{size.sm}</p>
          <NexusToggle data-testid="toggle-btn-size-sm" type="button" label-inactive="hide" label-active="show" size="sm" />
        </div>
        <div className="nexus-col-lg-2">
          <p className="nexus-h6">{size.md}</p>
          <NexusToggle data-testid="toggle-btn-size-md" type="button" label-inactive="hide" label-active="show" size="md" />
        </div>
        <div className="nexus-col-lg-2">
          <p className="nexus-h6">{size.lg}</p>
          <NexusToggle data-testid="toggle-btn-size-lg" type="button" label-inactive="hide" label-active="show" size="lg" />
        </div>
        <div className="nexus-col-lg-2">
          <p className="nexus-h6">{size.xl}</p>
          <NexusToggle data-testid="toggle-btn-size-xl" type="button" label-inactive="hide" label-active="show" size="xl" />
        </div>
      </div>        </>
  );
};

export default ButtonSizeComponent;
