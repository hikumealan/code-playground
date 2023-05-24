import { NexusFormField, NexusLabel, NexusInput } from '@nexus/react';
import { withPassword } from '../../constants';
const withPasswordComponent: React.FC = () => {
  return (
    <NexusFormField>
      <NexusLabel>{withPassword.text}</NexusLabel>
      <NexusInput
        data-testid="input-textbox-readonly"
        type="password"
        placeholder={withPassword.placeholder}
      ></NexusInput>
    </NexusFormField>
  );
};

export default withPasswordComponent;
