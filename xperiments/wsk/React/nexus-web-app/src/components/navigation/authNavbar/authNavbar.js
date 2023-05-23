import React from 'react';
import i18n from '../../../i18n/index.js';
import { NexusHeader, NexusHeaderLogo, NexusIcon, NexusHeaderMenu, NexusMenuItem } from '@nexus/react';
import Logo from '@nexus/core/dist/assets/images/nexus-logo.svg';
import { Link } from 'react-router-dom';
import './authNavbar.scss';

const translationScope = 'nav';

const authLinks = [
    { name: i18n.t('home', { scope: translationScope }), url: '/dashboard' },
    { name: i18n.t('examples', { scope: translationScope }), url: '/examples' },
    { name: i18n.t('test', { scope: translationScope }), url: '/test' },
    { name: i18n.t('info', { scope: translationScope }), url: '/info' },
    { name: i18n.t('contact', { scope: translationScope }), url: '/contact' },
    { name: i18n.t('logOut', { scope: translationScope }), url: '/logout' }
];

const AuthNavbar = () => (
    <NexusHeader>
        <NexusHeaderLogo>
            <Link to="dashboard">
                <NexusIcon src={Logo} />
                <span className="nexus-visually-hidden">Home</span>
            </Link>
        </NexusHeaderLogo>

        <NexusHeaderMenu>
            {authLinks.map((link) => <NexusMenuItem key={link.url}><Link to={link.url}>{link.name}</Link></NexusMenuItem>)}
        </NexusHeaderMenu>
    </NexusHeader>
);

export default AuthNavbar;
