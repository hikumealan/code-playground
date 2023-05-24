import React from 'react';
import {Link} from 'react-router-dom';
import { NexusHeader, NexusHeaderMenu, NexusMenuItem, NexusHeaderLogo, NexusIcon } from '@nexus/react';
import Logo from '@nexus/core/dist/assets/images/nexus-logo.svg';

const HeaderComponent: React.FC = () => (
  <NexusHeader class="nexus-header-sticky">
    <NexusHeaderLogo>
      <Link to='#'>
        <NexusIcon
          data-testid="nexus-header-logo"
          src={Logo} />
        <span className="nexus-visually-hidden">Home</span>
      </Link>
    </NexusHeaderLogo>

    <NexusHeaderMenu
      data-testid="nexus-hamburger-icon"
    >
      <NexusMenuItem>
        <Link to='#' data-testid="menu-item1">Item 1</Link>
      </NexusMenuItem>

      <NexusMenuItem>
        <Link to='#' data-testid="menu-item2">Item 2</Link>
      </NexusMenuItem>

      <NexusMenuItem>
        <Link to='#' data-testid="menu-item3">Item 3</Link>
      </NexusMenuItem>
    </NexusHeaderMenu>
  </NexusHeader>
);

export default HeaderComponent;
