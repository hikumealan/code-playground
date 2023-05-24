import PropTypes from 'prop-types';
import { NexusRadio } from '@nexus/react';

const RadioComponent: React.FC = (props) => {
  const {
    disabled = false,
    nameOption = 'Simple Radio Example',
    required = false,
    value = '',
    checked = false
  } = { ...props };

  return (
    <>
      <div className="nexus-center-xs nexus-mt-5">
        <div className="nexus-row nexus-center-xs">
          <NexusRadio
            data-testid="radio-btn-opt1"
            checked={checked}
            disabled={disabled}
            name={nameOption}
            required={required}
            value={value}
          >
            Option 1
          </NexusRadio>

          <NexusRadio
            data-testid="radio-btn-opt2"
            disabled={disabled}
            checked={checked}
            name={nameOption}
            required={required}
            value={value}
          >
            Option 2
          </NexusRadio>
        </div>
      </div>
    </>
  );
};

RadioComponent.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string
};

export default RadioComponent;
