import React from 'react';

import { NexusAvatar } from '@nexus/react';
import AvatarImage from '@nexus/core/dist/assets/images/avatar.png';


export const ImageAndNameComponent: React.FC = () => (
    <div className="nexus-col-xl-8">
        <NexusAvatar
        avatar-image-src={AvatarImage}
        avatar-size='lg'
        user-name='Emma Roberts'
    />
    </div>
)

export default ImageAndNameComponent;