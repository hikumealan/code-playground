import React from 'react';
import PropTypes from 'prop-types';
import { NexusErrorMessage, NexusFormField, NexusInput, NexusLabel } from '@nexus/react';

const ErrorComponent: React.FC = (props) => {
  const { message = "Please enter a first name." } = { ...props }

  return (
    <NexusFormField>
      <NexusLabel data-testid="label-first-name">First name</NexusLabel>
      <NexusInput data-testid="input-text-box" value=""></NexusInput>
      <NexusErrorMessage data-testid="error-message">{message}</NexusErrorMessage>
    </NexusFormField>
  );
};

ErrorComponent.propTypes = {
  message: PropTypes.string
}

export default ErrorComponent;
