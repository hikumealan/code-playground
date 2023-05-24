import React from 'react';
import { Link } from 'react-router-dom';
import { NexusHeader, NexusHeaderMenu, NexusMenuItem, NexusHeaderLogo, NexusIcon, NexusAvatar } from '@nexus/react';
import Logo from '@nexus/core/dist/assets/images/nexus-logo.svg';
import AvatarImage from '@nexus/core/dist/assets/images/avatar.png';

const WithAvatar: React.FC = () => (
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
                <Link to='#' data-testid="menu-item1">Home</Link>
            </NexusMenuItem>

            <NexusMenuItem>
                <Link to='#' data-testid="menu-item2">Dashboard</Link>
            </NexusMenuItem>

            <NexusMenuItem>
                <NexusAvatar
                    userName={'Jane Doe'}
                    avatarNotification={''}
                    avatarImageSrc={''}
                    avatarClassName={''}
                    avatarSize={'lg'}
                    avatarStatus={'online'}
                    description={''}
                    avatarNameDisplay={true}
                    avatarDark={false}
                    avatarLogoIcon={''}
                    avatar-image-src={AvatarImage}
                    className="nexus-pt-2"
                />
            </NexusMenuItem>
        </NexusHeaderMenu>
    </NexusHeader>
);

export default WithAvatar;
