import React from 'react';
import { NexusFormField, NexusInput, NexusLabel } from '@nexus/react';
import { emailValidation } from '../../constants';

const ErrorComponent: React.FC = () => {
  return (
    <NexusFormField>
      <NexusLabel data-testid="label-first-name">{emailValidation.name}</NexusLabel>
      <NexusInput
        data-testid="input-text-box"
        value=""
        placeholder={emailValidation.placeholder}
        type="email"
      ></NexusInput>
    </NexusFormField>
  );
};

export default ErrorComponent;
