import React from 'react';

import { NexusAvatar } from '@nexus/react';

export const StatusComponent: React.FC = () => (
    <div className="nexus-col-xl-8">
        <NexusAvatar avatar-size='lg'
        user-name='Joseph Benjamin'
        avatar-status='online'
        avatar-name-display={false} />
    </div>
);

export default StatusComponent;
