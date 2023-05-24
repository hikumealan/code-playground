import React from 'react';
import { NexusFormField, NexusInput, NexusLabel } from '@nexus/react';
import { nameValidation } from '../../constants';
const ErrorComponent: React.FC = () => {
  return (
    <NexusFormField>
      <NexusLabel data-testid="label-first-name">{nameValidation.title}</NexusLabel>
      <NexusInput
        data-testid="input-text-box"
        value=""
        placeholder={nameValidation.placeholder}
        max-length="10"
      ></NexusInput>
    </NexusFormField>
  );
};

export default ErrorComponent;
