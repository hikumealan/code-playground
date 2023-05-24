import React, { useState } from 'react';

import { NexusRadio } from '@nexus/react';

interface RadioComponentProps {
  disabled: boolean;
  name: string;
  required: boolean;
  value: string;
}

const RadioComponent: React.FC<RadioComponentProps> = (props) => {
  const { disabled, name, required, value } = { ...props };
  const [radioButtonValue, setRadioButtonValue] = useState(value);

  return (
    <>
      <div>
        <NexusRadio
          disabled={disabled}
          data-testid="radio-btn-opt1"
          checked={radioButtonValue === 'option1'}
          name={name}
          required={required}
          onInput={(event: any) => setRadioButtonValue(event.target.value)}
        >
          Option 1
        </NexusRadio>

        <NexusRadio
          disabled={disabled}
          name={name}
          required={required}
          data-testid="radio-btn-opt2"
          checked={radioButtonValue === 'option2'}
          onInput={(event: any) => setRadioButtonValue(event.target.value)}
        >
          Option 2
        </NexusRadio>
      </div>
    </>
  );
};

RadioComponent.defaultProps = {
  disabled: false,
  name: 'mainGroup',
  required: false,
  value: ''
};

export default RadioComponent;
