import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NexusMenu, NexusMenuItem } from '@nexus/react';


const MenuComponent: React.FC = (props) => {
  const { show = false, position = 'right' } = { ...props };
  const [open, setOpen] = useState(show);

  return (
    <>
      <button data-testid="btn-open-menu" className="nexus-btn-primary" onClick={() => setOpen(true)}>
        Open Menu
      </button>

      <NexusMenu position={position} data-testid="btn-close" open={open} onCloseEvent={() => setOpen(false)}>
        <NexusMenuItem>
          <Link to="#" data-testid="item1">
            Item 1
          </Link>
        </NexusMenuItem>

        <NexusMenuItem>
          <Link to="#" data-testid="item2">
            Item 2
          </Link>
        </NexusMenuItem>

        <NexusMenuItem>
          <Link to="#" data-testid="item3">
            Item 3
          </Link>
        </NexusMenuItem>
      </NexusMenu>
    </>
  );
};

MenuComponent.propTypes = {
  position: PropTypes.string,
  show: PropTypes.bool
};

export default MenuComponent;
