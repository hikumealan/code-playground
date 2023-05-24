import React from 'react';
import { NexusChip } from '@nexus/react';
import Note from '../notecontainer/note';

interface ChipComponentProps {
  disabled: boolean;
  error: boolean;
  removable: boolean;
  success: boolean;
  text: string;
}

const ChipComponent: React.FC<ChipComponentProps> = (props) => {
  const { disabled, error, removable, success, text } = { ...props };

  return (
    <>
      <NexusChip disabled={disabled} error={error} removable={removable} success={success}>
        {text}
      </NexusChip>
      <Note noteType="onNote" />
    </>
  );
};

ChipComponent.defaultProps = {
  disabled: false,
  error: false,
  removable: false,
  success: false,
  text: 'Chip Text'
};

export default ChipComponent;
