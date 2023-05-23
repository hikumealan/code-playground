import React from 'react';
import { NexusHeader, NexusHeaderLogo, NexusIcon, NexusHeaderMenu, NexusMenuItem } from '@nexus/react';
import Logo from '@nexus/core/dist/assets/images/nexus-logo.svg';
import { Link } from 'react-router-dom';
import i18n from '../../../i18n';

const unauthLinks = [{ name: i18n.t('nav.home'), url: '/dashboard' }];

const UnauthNavbar = () => (
    <NexusHeader>
        <NexusHeaderLogo>
            <Link to="dashboard">
                <NexusIcon src={Logo} />
                <span className="nexus-visually-hidden">Home</span>
            </Link>
        </NexusHeaderLogo>

        <NexusHeaderMenu>
            {unauthLinks.map((link) => <NexusMenuItem key={link.url}><Link to={link.url}>{link.name}</Link></NexusMenuItem>)}
        </NexusHeaderMenu>
    </NexusHeader>
);

export default UnauthNavbar;
