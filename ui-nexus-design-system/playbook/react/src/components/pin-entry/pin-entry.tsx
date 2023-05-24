import React from 'react';
import { NexusPinEntry } from '@nexus/react';

interface PinEntryComponentProps {
  length: number;
  disabled: boolean;
  type: 'text' | 'password' | 'tel';
}

const PinEntryComponent: React.FC<PinEntryComponentProps> = (props) => (
  <NexusPinEntry {...props} data-testid="pin-entry"></NexusPinEntry>
);

PinEntryComponent.defaultProps = {
  length: 3,
  disabled: false,
  type: 'text'
};

export default PinEntryComponent;
