import React from 'react';
import { types } from '../../constants';

import { NexusToggle } from '@nexus/react';

const TypesComponent: React.FC = () => {
  return (
    <>
      <p className="nexus-h6">{types.default}</p>
      <NexusToggle data-testid="toggle-default" labelInactive="hide" labelActive="show" size="sm"></NexusToggle>

      <p className="nexus-h6">{types.button}</p>
      <NexusToggle data-testid="toggle-button" type="button" labelInactive="hide" labelActive="show" size="sm"></NexusToggle>        </>
  );
};

export default TypesComponent;
