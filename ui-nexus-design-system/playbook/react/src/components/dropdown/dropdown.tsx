import { NexusDropdown, NexusIcon, NexusOption } from '@nexus/react';

import NavigationIcMoreVert24px from '@nexus/core/dist/assets/icons/navigation/ic_more_vert_24px.svg';


const DropdownComponent: React.FC = () => {
  return (
    <>
      <p className="nexus-h6">Basic Dopdown</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quas nam doloremque sint
        <NexusDropdown placement={"right"} dropdown-type={"basic"} height={150} width={180}>
          <NexusIcon slot={"trigerer"} id={"iconId"} src={NavigationIcMoreVert24px}></NexusIcon>
          <NexusOption>Option 1</NexusOption>
          <NexusOption>Option 2</NexusOption>
          <NexusOption>Option 3</NexusOption>
        </NexusDropdown>
        dignissimos.
      </p>
    </>
  );
};

export default DropdownComponent;