import React from 'react';

import { NexusErrorMessage, NexusFormField, NexusInput, NexusLabel } from '@nexus/react';

const ErrorComponent: React.FC = () => (
  <NexusFormField>
    <NexusLabel data-testid="label-first-name">First name</NexusLabel>
    <NexusInput data-testid="input-text-box" value=""></NexusInput>
    <NexusErrorMessage data-testid="error-message">Please enter a first name.</NexusErrorMessage>
  </NexusFormField>
);

export default ErrorComponent;
