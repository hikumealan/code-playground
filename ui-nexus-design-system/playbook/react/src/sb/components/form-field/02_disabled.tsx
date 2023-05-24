import React, { useState } from 'react';
import { NexusFormField, NexusInput, NexusLabel } from '@nexus/react';
import { disabledFormField } from '../../constants';

const FormFieldDisabled: React.FC = () => {
  const [disabledValue, setDisabledValue] = useState(disabledFormField.text);

  return (
    <>
      <NexusFormField>
        <NexusLabel data-testid="label-first-name-disabled">{disabledFormField.disabled}</NexusLabel>
        <NexusInput
          data-testid="textbox-disabled"
          value={disabledValue}
          onInput={(event: any) => setDisabledValue(event.target.value)}
          disabled
        ></NexusInput>
      </NexusFormField>
    </>
  );
};

export default FormFieldDisabled;
