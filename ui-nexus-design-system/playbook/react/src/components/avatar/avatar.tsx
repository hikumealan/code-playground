import React from 'react';

import { NexusAvatar } from '@nexus/react';

interface AvatarComponentProps {
  userName: string;
  avatarNotification: string;
  avatarImageSrc: string;
  avatarClassName: string;
  avatarSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  avatarStatus: string;
  description: string;
  avatarNameDisplay: boolean;
  avatarDark: boolean;
  avatarLogoIcon: string;
}

const AvatarComponent: React.FC<AvatarComponentProps> = (props) => {
  const {
    userName,
    avatarNotification,
    avatarImageSrc,
    avatarClassName,
    avatarSize,
    avatarStatus,
    description,
    avatarNameDisplay,
    avatarDark,
    avatarLogoIcon
  } = { ...props };

  return (
    <NexusAvatar
      userName={userName}
      avatarNotification={avatarNotification}
      avatarImageSrc={avatarImageSrc}
      avatarClassName={avatarClassName}
      avatarSize={avatarSize}
      avatarStatus={avatarStatus}
      description={description}
      avatarNameDisplay={avatarNameDisplay}
      avatarDark={avatarDark}
      avatarLogoIcon={avatarLogoIcon}
    ></NexusAvatar>
  );
};

AvatarComponent.defaultProps = {
  userName: 'No Name',
  avatarNotification: '',
  avatarImageSrc: '',
  avatarClassName: '',
  avatarSize: 'lg',
  avatarStatus: '',
  description: '',
  avatarNameDisplay: false,
  avatarDark: false,
  avatarLogoIcon: ''
};

export default AvatarComponent;
