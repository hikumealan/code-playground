import React from 'react';
import PropTypes from 'prop-types';
import { NexusDropdown, NexusIcon, NexusOption } from '@nexus/react';
import NavigationIcMoreVert24px from '@nexus/core/dist/assets/icons/navigation/ic_more_vert_24px.svg';

const DropdownComponent: React.FC = (props) => {
  const { placement = 'left', type = 'basic', height = 150, width = 180, show = false } = { ...props };
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quas nam doloremque sint Lorem ipsum dolor sit amet
        <NexusDropdown placement={placement} dropdown-type={type} height={height} width={width} show={show}>
          <NexusIcon slot={'trigerer'} id={'iconId'} src={NavigationIcMoreVert24px}></NexusIcon>
          <NexusOption>Option 1</NexusOption>
          <NexusOption>Option 2</NexusOption>
          <NexusOption>Option 3</NexusOption>
        </NexusDropdown>
      </p>
    </>
  );
};

DropdownComponent.propTypes = {
  show: PropTypes.bool,
  placement: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  type: PropTypes.string
};

export default DropdownComponent;
