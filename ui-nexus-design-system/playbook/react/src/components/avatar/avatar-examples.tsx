import React from 'react';

import { NexusAvatar } from '@nexus/react';
import AvatarLogo from '@nexus/core/dist/assets/icons/action/ic_perm_identity_24px.svg';
import AvatarImage from '@nexus/core/dist/assets/images/avatar.png';



const NexusAvatarExamples: React.FC = () => {
  return (
    <>
        <p className="nexus-h4">Avatar sizes</p>
        <div className="nexus-row">
            <div className="nexus-col-xl-1">
                <p className="nexus-h6">xs</p>
                <NexusAvatar
                    avatar-size='xs'
                    user-name='Joseph Benjamin'
                    avatar-logo-icon={AvatarLogo}
                    avatar-name-display= {false}
                >
                </NexusAvatar>
            </div>
            <div className="nexus-col-xl-1">
                <p className="nexus-h6">sm</p>
                <NexusAvatar
                    avatar-size='sm'
                    user-name='Joseph Benjamin'
                    avatar-logo-icon={AvatarLogo}
                    avatar-name-display= {false}
                >
                </NexusAvatar>
            </div>
            <div className="nexus-col-xl-1">
                <p className="nexus-h6">md</p>
                <NexusAvatar
                    avatar-size='md'
                    user-name='Joseph Benjamin'
                    avatar-logo-icon={AvatarLogo}
                    avatar-name-display= {false}
                >
                </NexusAvatar>
            </div>
            <div className="nexus-col-xl-1">
                <p className="nexus-h6">lg</p>
                <NexusAvatar
                    avatar-size='lg'
                    user-name='Joseph Benjamin'
                    avatar-logo-icon={AvatarLogo}
                    avatar-name-display= {false}
                >
                </NexusAvatar>
            </div>
            <div className="nexus-col-xl-1">
                <p className="nexus-h6">xl</p>
                <NexusAvatar
                    avatar-size='xl'
                    user-name='Joseph Benjamin'
                    avatar-logo-icon={AvatarLogo}
                    avatar-name-display= {false}
                >
                </NexusAvatar>
            </div>
        </div>
        <p className="nexus-h4">Avatar types</p>
        <div className="nexus-row">
            <div className="nexus-col-xl-2">
                <p className="nexus-h6">Avatar with Initials</p>
                <NexusAvatar
                    avatar-size='lg'
                    user-name='Joseph Benjamin'
                    avatar-name-display= {false}
                >
                </NexusAvatar>
            </div>
            <div className="nexus-col-xl-2">
                <p className="nexus-h6">Avatar with Status</p>
                <NexusAvatar
                    avatar-size='lg'
                    user-name='Joseph Benjamin'
                    avatar-status='online'
                    avatar-name-display= {false}
                >
                </NexusAvatar>
            </div>
            <div className="nexus-col-xl-2">
                <p className="nexus-h6">Avatar with Initials and Name</p>
                <NexusAvatar
                    avatar-size='lg'
                    user-name='Joseph Benjamin'
                >
                </NexusAvatar>
            </div>
            <div className="nexus-col-xl-2">
                <p className="nexus-h6">Avatar with Logo and Name</p>
                <NexusAvatar
                    avatar-size='lg'
                    user-name='Joseph Benjamin'
                    avatar-logo-icon={AvatarLogo}
                >
                </NexusAvatar>
            </div>
            <div className="nexus-col-xl-2">
                <p className="nexus-h6">Avatar with Initials, Name and Notification</p>
                <NexusAvatar
                    avatar-size='lg'
                    user-name='Joseph Benjamin'
                    avatar-notification='14'
                >
                </NexusAvatar>
            </div>
            <div className="nexus-col-xl-2">
                <p className="nexus-h6">Avatar with Image and Name</p>
                <NexusAvatar
                    avatar-image-src={AvatarImage}
                    avatar-size='lg'
                    user-name='Joseph Benjamin'
                >
                </NexusAvatar>
            </div>
            <div className="nexus-col-xl-2">
                <p className="nexus-h6">Avatar with Initials in dark mode</p>
                <NexusAvatar
                    avatar-size='lg'
                    user-name='Joseph Benjamin'
                    avatar-name-display= 'false'
                    avatar-dark='true'
                >
                </NexusAvatar>
            </div>
        </div>
    </>
  )
}


export default NexusAvatarExamples;

