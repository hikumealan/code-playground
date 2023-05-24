import React from 'react';
import PropTypes from 'prop-types';
import { NexusPinEntry } from '@nexus/react';


const PinEntryComponent: React.FC = (props) => (
  <div className='nexus-center-xs nexus-mt-5'>
    <NexusPinEntry {...props} data-testid="pin-entry"></NexusPinEntry>
  </div>
);

PinEntryComponent.propTypes = {
  length: PropTypes.number,
  disabled: PropTypes.bool,
  type: PropTypes.string
};

export default PinEntryComponent;
