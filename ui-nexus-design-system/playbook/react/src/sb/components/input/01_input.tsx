import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NexusFormField, NexusInput, NexusLabel } from '@nexus/react';
import { input } from '../../constants';

const InputComponent: React.FC = (props) => {
  const [data, setData] = useState('');

  return (
    <>
      <NexusFormField>
        <NexusLabel data-testid="label-first-name">{input.title}</NexusLabel>
        <NexusInput
          {...props}
          data-testid="input-text-box"
          value={data}
         
          onInput={(event: any) => setData(event.target.value)}
        ></NexusInput>
      </NexusFormField>
    </>
  );
};

InputComponent.propTypes = {
  attrId: PropTypes.string,
  disabled: PropTypes.bool,
  max: PropTypes.string,
  min: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string
};

export default InputComponent;
