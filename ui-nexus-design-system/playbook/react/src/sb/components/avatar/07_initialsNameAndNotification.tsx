import React from 'react';

import { NexusAvatar } from '@nexus/react';


export const InitialsNameAndNotificationComponent: React.FC = () => (
    <div className="nexus-col-xl-8">
        <NexusAvatar
            avatar-size='lg'
            user-name='Joseph Benjamin'
            avatar-notification='14' />
    </div>
);

export default InitialsNameAndNotificationComponent;
