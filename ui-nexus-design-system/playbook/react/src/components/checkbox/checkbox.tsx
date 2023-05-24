import React from 'react';

import { NexusCheckbox } from '@nexus/react';
import Note from '../notecontainer/note';

interface CheckboxComponentProps {
  attrId: string;
  checked: boolean;
  disabled: boolean;
  indeterminate: boolean;
  required: boolean;
}

const CheckboxComponent: React.FC<CheckboxComponentProps> = (props) => {
  return (
    <>
      <NexusCheckbox {...props}>Check me!</NexusCheckbox>
      <Note noteType="eventNote" />
    </>
  );
};

CheckboxComponent.defaultProps = {
  attrId: '',
  checked: false,
  disabled: false,
  indeterminate: false,
  required: false
};

export default CheckboxComponent;
