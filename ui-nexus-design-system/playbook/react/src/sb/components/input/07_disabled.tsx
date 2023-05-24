import { NexusLabel, NexusInput, NexusFormField } from '@nexus/react';
import { disabledInput } from '../../constants';
const disabledComponent: React.FC = () => {
  return (
    <NexusFormField>
      <NexusLabel>{disabledInput.text}</NexusLabel>
      <NexusInput disabled={true} value={disabledInput.value}></NexusInput>
    </NexusFormField>
  );
};

export default disabledComponent;
