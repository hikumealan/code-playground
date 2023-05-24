import React, { useState } from 'react';
import { NexusFormField, NexusLabel, NexusInput } from '@nexus/react';
import { formField } from '../../constants';

const FormFieldComponent: React.FC = () => {
  const [value, setValue] = useState('');

  return (
      <NexusFormField>
        <NexusLabel data-testid="label-first-name">{formField.title}</NexusLabel>
        <NexusInput
          data-testid="form-field-textbox"
          value={value}
          onInput={(event: any) => setValue(event.target.value)}
        ></NexusInput>
      </NexusFormField>
  );
};

export default FormFieldComponent;
