import { NexusDropdown, NexusIcon, NexusOption } from '@nexus/react';
import { withSelect } from '../../constants';

const DropdownExampleComponent: React.FC = () => {
  return (
    <>
      <p>
        {withSelect.text}
        <NexusDropdown placement={'right'} dropdown-type={'basic'} height={150} width={180}>
          <NexusIcon slot={'trigerelement'} id={'iconId'} src={withSelect.src}></NexusIcon>
          <NexusOption>{withSelect.option1}</NexusOption>
          <NexusOption>{withSelect.option2}</NexusOption>
          <NexusOption>{withSelect.option3}</NexusOption>
        </NexusDropdown>
      </p>

      <p>
        {withSelect.text}
        <NexusDropdown placement={'left'} dropdown-type={'basic'} height={150} width={180}>
          <NexusIcon slot={'trigerelement'} id={'iconId'} src={withSelect.src}></NexusIcon>
          <NexusOption label="Option 1" value="Option1">
            {withSelect.option1}
          </NexusOption>
          <NexusOption label="Option 2" value="Option2">
            {withSelect.option2}
          </NexusOption>
          <NexusOption label="Option 3" value="Option3">
            {withSelect.option3}
          </NexusOption>
        </NexusDropdown>
      </p>

      <p>
        {withSelect.text}
        <NexusDropdown placement={'center'} dropdown-type={'basic'} height={150} width={180}>
          <NexusIcon slot={'trigerelement'} id={'iconId'} src={withSelect.src}></NexusIcon>
          <NexusOption label="Option 1" value="Option1">
            {withSelect.option1}
          </NexusOption>
          <NexusOption label="Option 2" value="Option2">
            {withSelect.option2}
          </NexusOption>
          <NexusOption label="Option 3" value="Option3">
            {withSelect.option3}
          </NexusOption>
        </NexusDropdown>
      </p>
    </>
  );
};
export default DropdownExampleComponent;
