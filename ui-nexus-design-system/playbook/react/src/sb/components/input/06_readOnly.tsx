import React from 'react';
import { NexusFormField, NexusInput, NexusLabel } from '@nexus/react';
import { readOnly } from '../../constants';
const ReadOnlyInputComponent: React.FC = () => {
  return (
    <NexusFormField>
      <NexusLabel data-testid="label-first-name">{readOnly.text}</NexusLabel>
      <NexusInput
        data-testid="input-textbox-readonly"
        readonly={true}
        value={readOnly.value}
        placeholder="Value..."
      ></NexusInput>
    </NexusFormField>
  );
};

export default ReadOnlyInputComponent;
