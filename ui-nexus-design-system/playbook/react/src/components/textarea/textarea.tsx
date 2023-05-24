import React from 'react';

import { NexusTextarea, NexusFormField, NexusLabel } from '@nexus/react';

interface TextAreaComponentProps {
  disabled: boolean;
  maxLength: number;
  minLength: number;
  cols: number;
  rows: number;
  placeholder: string;
  required: boolean;
  value: string;
}

const TextAreaComponent: React.FC<TextAreaComponentProps> = (props) => {
  return (
    <NexusFormField>
      <NexusLabel data-testid="textarea-header">Bio...</NexusLabel>
      <NexusTextarea {...props} data-testid="textarea-content" value=""></NexusTextarea>
    </NexusFormField>
  );
};

TextAreaComponent.defaultProps = {
  disabled: false,
  maxLength: 100,
  minLength: 0,
  cols: 100,
  rows: 3,
  placeholder: '',
  required: false,
  value: ''
};

export default TextAreaComponent;
