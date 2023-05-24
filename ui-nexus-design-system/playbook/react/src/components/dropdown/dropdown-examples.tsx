import { NexusDropdown, NexusIcon, NexusOption } from '@nexus/react';

import NavigationIcMoreVert24px from '@nexus/core/dist/assets/icons/navigation/ic_more_vert_24px.svg';


const DropdownExampleComponent: React.FC = () => {
  return (
    <>
      <p className="nexus-h6">Basic Dopdown examples</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quas nam doloremque sint
        <NexusDropdown placement={"right"} dropdown-type={"basic"} height={150} width={180}>
          <NexusIcon slot={"trigerelement"} id={"iconId"} src={NavigationIcMoreVert24px}></NexusIcon>
          <NexusOption>Option 1</NexusOption>
          <NexusOption>Option 2</NexusOption>
          <NexusOption>Option 3</NexusOption>
        </NexusDropdown>
        dignissimos.
      </p>

      <p>Lorem ipsum
        <NexusDropdown placement={"left"} dropdown-type={"basic"} height={150} width={220}>
          <NexusIcon slot={"trigerelement"} id={"iconId"} src={NavigationIcMoreVert24px}></NexusIcon>
          <NexusOption label="Option 1" value="Option1">Option 1</NexusOption>
          <NexusOption label="Option 2" value="Option2">Option 2</NexusOption>
          <NexusOption label="Option 3" value="Option3">Option 3</NexusOption>
        </NexusDropdown>
        dolor sit amet consectetur, adipisicing elit. A quas nam doloremque sint dignissimos.</p>

      <p>Lorem ipsum dolor sit amet
        <NexusDropdown placement={"center"} dropdown-type={"basic"} height={150} width={180}>
          <NexusIcon slot={"trigerelement"} id={"iconId"} src={NavigationIcMoreVert24px}></NexusIcon>
          <NexusOption label="Option 1" value="Option1">Option 1</NexusOption>
          <NexusOption label="Option 2" value="Option2">Option 2</NexusOption>
          <NexusOption label="Option 3" value="Option3">Option 3</NexusOption>
          <NexusOption label="Option 4" value="Option4">Option 4</NexusOption>
          <NexusOption label="Option 5" value="Option5">Option 5</NexusOption>
          <NexusOption label="Option 6" value="Option6">Option 6</NexusOption>
          <NexusOption label="Option 7" value="Option7">Option 7</NexusOption>
        </NexusDropdown>
        consectetur, adipisicing elit. A quas nam doloremque sint dignissimos.</p>
    </>
  );
};

export default DropdownExampleComponent;