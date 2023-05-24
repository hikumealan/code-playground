import { NexusFormField, NexusInput, NexusLabel } from '@nexus/react';
import { withNumber } from '../../constants';
const InputWithNumberRange: React.FC = () => {
  return (
    <NexusFormField>
      <NexusLabel data-testid="label-first-name">{withNumber.text}</NexusLabel>
      <NexusInput
        data-testid="input-textbox-num"
        type="number"
        placeholder={withNumber.placeholder}
      ></NexusInput>
    </NexusFormField>
  );
};

export default InputWithNumberRange;
