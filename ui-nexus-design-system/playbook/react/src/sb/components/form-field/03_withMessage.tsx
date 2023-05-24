import React, { useState } from 'react';
import { NexusMessage, NexusFormField, NexusInput, NexusLabel } from '@nexus/react';
import { withMessageFormField } from '../../constants';

const FormFieldWithMessage: React.FC = () => {
  const [messageValue, setMessageValue] = useState('');

  return (
    <NexusFormField>
      <NexusLabel data-testid="label-first-name"> {withMessageFormField.messageName} </NexusLabel>
      <NexusInput
        data-testid="textbox-message"
        value={messageValue}
        onInput={(event: any) => setMessageValue(event.target.value)}
      ></NexusInput>
      <NexusMessage data-testid="custom-message">{withMessageFormField.customMessage}</NexusMessage>
    </NexusFormField>
  );
};

export default FormFieldWithMessage;
