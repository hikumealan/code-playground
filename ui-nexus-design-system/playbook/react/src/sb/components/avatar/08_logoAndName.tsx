import React from 'react';

import { NexusAvatar } from '@nexus/react';
import AvatarLogo from '@nexus/core/dist/assets/icons/action/ic_perm_identity_24px.svg';


export const LogoAndNameComponent: React.FC = () => (
    <div className="nexus-col-xl-8">
        <NexusAvatar
            avatar-size='lg'
            user-name='Joseph Benjamin'
            avatar-logo-icon={AvatarLogo}
        />
    </div>
);

export default LogoAndNameComponent;
