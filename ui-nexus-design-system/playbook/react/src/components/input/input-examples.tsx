import React, { useState } from 'react';
import { NexusFormField, NexusInput, NexusLabel } from '@nexus/react';

const InputExampleComponent: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <div>
        <NexusFormField>
          <NexusLabel data-testid="label-first-name">First name (maxLength="20")</NexusLabel>
          <NexusInput
            data-testid="input-textbox-maxlen"
            value={value}
            onInput={(event: any) => setValue(event.target.value)}
            maxLength={20}
            placeholder="Value..."
          ></NexusInput>

          <NexusLabel data-testid="label-pwd-field">Password Field Example</NexusLabel>
          <NexusInput data-testid="input-textbox-pwd" type="password" placeholder="Value..."></NexusInput>

          <NexusLabel data-testid="label-num-field">Number Field Example</NexusLabel>
          <NexusInput
            data-testid="input-textbox-num"
            type="number"
            min="100"
            max="1000"
            placeholder="Value..."
          ></NexusInput>
          <NexusLabel data-testid="label-date-field">Date Field Example (Min 2022-01-01 and Max 2023-01-01)</NexusLabel>
          <NexusInput
            data-testid="input-textbox-date"
            type="date"
            min="2022-01-01"
            max="2023-01-01"
            placeholder="Value..."
          ></NexusInput>

          <NexusLabel data-testid="label-readonly-field">Readonly Field Example</NexusLabel>
          <NexusInput
            data-testid="input-textbox-readonly"
            readonly={true}
            value="This is readonly field"
            placeholder="Value..."
          ></NexusInput>

          <NexusLabel data-testid="label-disabled-field">Disabled Field Example</NexusLabel>
          <NexusInput
            data-testid="input-textbox-disabled"
            disabled={true}
            value="The field is Disabled"
            minLength={3}
            maxLength={20}
            placeholder="Value..."
          ></NexusInput>
        </NexusFormField>
      </div>
    </>
  );
};

export default InputExampleComponent;
