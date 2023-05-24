import React, { useState } from 'react';
import { NexusFormField, NexusInput, NexusLabel } from '@nexus/react';

interface InputComponentProps {
  attrId: string;
  disabled: boolean;
  max: string;
  maxLength: number;
  min: string;
  minLength: number;
  placeholder: string;
  readonly: boolean;
  required: boolean;
  type: 'date' | 'email' | 'number' | 'password' | 'tel' | 'text';
  value: string;
}

const InputComponent: React.FC<InputComponentProps> = (props) => {
  const { attrId, disabled, max, maxLength, min, minLength, placeholder, readonly, required, type, value } = {
    ...props
  };

  const [data, setData] = useState('');

  return (
    <>
      <div>
        <NexusFormField>
          <NexusLabel data-testid="label-first-name">First name</NexusLabel>
          <NexusInput
            attrId={attrId}
            disabled={disabled}
            max={max}
            maxLength={maxLength}
            min={min}
            minLength={minLength}
            placeholder={placeholder}
            readonly={readonly}
            required={required}
            type={type}
            data-testid="input-text-box"
            value={data}
            onInput={(event: any) => setData(event.target.value)}
          ></NexusInput>
        </NexusFormField>
      </div>
    </>
  );
};

InputComponent.defaultProps = {
  attrId: '',
  disabled: false,
  max: '',
  maxLength: 10,
  min: '',
  minLength: 0,
  placeholder: '',
  readonly: false,
  required: false,
  type: 'text',
  value: ''
};

export default InputComponent;
