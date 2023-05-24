import React from 'react';
import { chip } from '../../constants';
import { NexusChip } from '@nexus/react';
import PropTypes from 'prop-types';


const ChipComponent: React.FC = (props) => {
  const { disabled = false, error = false, removable = false, success = false, text = chip.text } = { ...props };
  return (
    <div className="nexus-center-xs nexus-mt-5">
      <div className="nexus-row nexus-around-xs">
        <NexusChip
          disabled={disabled}
          error={error}
          removable={removable}
          success={success}>{text}</NexusChip>
      </div>
    </div>
  );
};

ChipComponent.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  removable: PropTypes.bool,
  success: PropTypes.bool,
  text: PropTypes.string
};

export default ChipComponent;
