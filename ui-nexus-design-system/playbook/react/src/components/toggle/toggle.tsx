import React from 'react';

import { NexusToggle } from '@nexus/react';

interface ToggleComponentProps {
  disabled: boolean;
  labelActive: string;
  labelInactive: string;
  required: boolean;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  toggled: boolean;
}

const ToggleComponent: React.FC<ToggleComponentProps> = (props) => {
  return <NexusToggle {...props}></NexusToggle>;
};

ToggleComponent.defaultProps = {
  disabled: false,
  labelActive: '',
  labelInactive: '',
  required: false,
  size: 'md',
  toggled: false
};

export default ToggleComponent;
