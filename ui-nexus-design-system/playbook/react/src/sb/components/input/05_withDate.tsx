import React from 'react';
import { NexusFormField, NexusInput, NexusLabel } from '@nexus/react';
import { withDate } from '../../constants';
const DateRangeInputComponent: React.FC = () => {
  return (
    <NexusFormField>
      <NexusLabel data-testid="label-first-name">{withDate.text}</NexusLabel>
      <NexusInput
        data-testid="input-textbox-date"
        type="date"
        min={withDate.min}
        max={withDate.max}
        placeholder={withDate.placeholder}
      ></NexusInput>
    </NexusFormField>
  );
};

export default DateRangeInputComponent;
