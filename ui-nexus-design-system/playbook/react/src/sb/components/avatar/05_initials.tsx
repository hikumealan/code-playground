import React from 'react';

import { NexusAvatar } from '@nexus/react';


export const InitialsComponent: React.FC = () => (
    <div className="nexus-col-xl-8">
        <NexusAvatar
        avatar-size='lg'
        user-name='Joseph Benjamin'
        avatar-name-display={false} />
    </div>
);

export default InitialsComponent;