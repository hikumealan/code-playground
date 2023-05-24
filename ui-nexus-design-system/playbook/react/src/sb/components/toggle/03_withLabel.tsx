import React from 'react';

import { NexusToggle } from '@nexus/react';

const WithLabelComponent: React.FC = () => {
  return (
    <>
      <NexusToggle data-testid="toggle-labels" labelActive="show" labelInactive="hide" size="sm" />
    </>
  );
};

export default WithLabelComponent;
