import React, { useState } from 'react';
import { NexusErrorMessage, NexusFormField, NexusInput, NexusLabel } from '@nexus/react';
import { withErrorFormField } from '../../constants';

const FormFieldWithErrorNotification: React.FC = () => {
  const [errorValue, setErrorValue] = useState('');

  return (
    <NexusFormField>
      <NexusLabel data-testid="label-first-name-error"> {withErrorFormField.name} </NexusLabel>
      <NexusInput
        data-testid="textbox-error"
        value={errorValue}
        onInput={(event: any) => setErrorValue(event.target.value)}
      ></NexusInput>
      <NexusErrorMessage data-testid="textbox-error-msg">{withErrorFormField.message}</NexusErrorMessage>
    </NexusFormField>
  );
};

export default FormFieldWithErrorNotification;
