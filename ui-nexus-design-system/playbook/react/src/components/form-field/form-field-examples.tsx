import React, { useState } from 'react';
import { NexusMessage, NexusErrorMessage, NexusFormField, NexusInput, NexusLabel } from '@nexus/react';

const FormFieldExampleComponent: React.FC = () => {
  const [disabledValue, setDisabledValue] = useState('Value');

  const [messageValue, setMessageValue] = useState('');

  const [errorValue, setErrorValue] = useState('');

  return (
    <>
      <p className="nexus-h5">Disabled</p>

      <NexusFormField>
        <NexusLabel
          data-testid="label-first-name-disabled"
        >
          First name
        </NexusLabel>
        <NexusInput
          data-testid="textbox-disabled"
          value={disabledValue} onInput={(event: any) => setDisabledValue(event.target.value)} disabled></NexusInput>
      </NexusFormField>

      <p className="nexus-h5">With Message</p>

      <NexusFormField>
        <NexusLabel
          data-testid="label-first-name"
        >
          First name
        </NexusLabel>
        <NexusInput
          data-testid="textbox-message"
          value={messageValue} onInput={(event: any) => setMessageValue(event.target.value)}>

        </NexusInput>
        <NexusMessage
          data-testid="custom-message"
        >
          Custom message
        </NexusMessage>
      </NexusFormField>

      <p className="nexus-h5">With Error</p>

      <NexusFormField>
        <NexusLabel
          data-testid="label-first-name-error"
        >
          First name
        </NexusLabel>
        <NexusInput
          data-testid="textbox-error"
          value={errorValue} onInput={(event: any) => setErrorValue(event.target.value)}></NexusInput>
        <NexusErrorMessage
          data-testid="textbox-error-msg"
        >
          This is an error message
        </NexusErrorMessage>
      </NexusFormField>
    </>
  );
};

export default FormFieldExampleComponent;
