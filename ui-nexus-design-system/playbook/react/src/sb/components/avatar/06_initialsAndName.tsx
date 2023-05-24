import React from 'react';

import { NexusAvatar } from '@nexus/react';


export const InitialsAndNameComponent: React.FC = () => (
    <div className="nexus-col-xl-8">
        <NexusAvatar avatar-size='lg'
            user-name='Joseph Benjamin' />
    </div>
);

export default InitialsAndNameComponent;