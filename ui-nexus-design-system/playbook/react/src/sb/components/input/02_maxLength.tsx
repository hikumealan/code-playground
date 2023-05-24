import React, { useState } from 'react';
import { NexusErrorMessage, NexusFormField, NexusInput, NexusLabel } from '@nexus/react';
import { maxLength } from '../../constants';

const InputWithFixedLength: React.FC = () => {
  const [value, setValue] = useState('');
  const [showError, setShowError] = useState(false);

  const onInputChangeHandler = (event: any) => {
    setShowError(event.target.value.length > 19);
    setValue(event.target.value);
  };

  return (
    <NexusFormField>
      <NexusLabel data-testid="label-first-name">{maxLength.text}</NexusLabel>
      <NexusInput
        data-testid="input-textbox-maxlength"
        value={value}
        onInput={(event: any) => onInputChangeHandler(event)}
        maxLength={20}
        placeholder={maxLength.placeholder}
      ></NexusInput>
      {showError ? <NexusErrorMessage data-testid="error-message">{maxLength.warning}</NexusErrorMessage> : ''}
    </NexusFormField>
  );
};

export default InputWithFixedLength;
