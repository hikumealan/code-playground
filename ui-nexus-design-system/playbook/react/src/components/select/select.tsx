import React, { useState } from 'react';
import { NexusSelect, NexusFormField, NexusLabel } from '@nexus/react';
import Note from '../notecontainer/note';

interface SelectComponentProps {
  delimiter: string;
  disabled: boolean;
  multiple: boolean;
  placeholder: string;
  required: boolean;
  type: 'native' | 'custom';
  value: string;
}

const SelectComponent: React.FC<SelectComponentProps> = (props) => {
  const { disabled, delimiter, multiple, placeholder, required, type, value } = { ...props };
  const [valueInfo, setValueInfo] = useState(value);

  return (
    <div>
      <NexusFormField>
        <NexusLabel>Select an option</NexusLabel>
        <NexusSelect
          disabled={disabled}
          delimiter={delimiter}
          multiple={multiple}
          placeholder={placeholder}
          required={required}
          type={type}
          data-testid="select"
          value={valueInfo}
          onInput={(event: any) => setValueInfo(event.target.value)}
        >
          <option data-testid="select-pls-sel" disabled>
            Please Select
          </option>
          <option data-testid="select-opt1" value="option1">
            Option 1
          </option>
          <option data-testid="select-opt2" value="option2">
            Option 2
          </option>
          <option data-testid="select-opt3" value="option3">
            Option 3
          </option>
        </NexusSelect>
      </NexusFormField>
      <Note noteType="eventNote" />
      <Note noteType="onNote" />
      <Note noteType="react_key_note" />
    </div>
  );
};

SelectComponent.defaultProps = {
  delimiter: '',
  disabled: false,
  multiple: false,
  placeholder: '',
  required: false,
  type: 'native',
  value: 'Please Select'
};

export default SelectComponent;
