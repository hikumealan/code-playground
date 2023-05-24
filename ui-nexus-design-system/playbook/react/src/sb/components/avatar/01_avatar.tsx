import React from 'react';
import PropTypes from 'prop-types';

import { NexusAvatar } from '@nexus/react';

export const AvatarComponent: React.FC = (props) => {
  const {
    userName = 'Name',
    avatarNotification = '',
    avatarImageSrc = '',
    avatarClassName = '',
    avatarSize = 'lg',
    avatarStatus = '',
    description = '',
    avatarNameDisplay = false,
    avatarDark = false,
    avatarLogoIcon = ''
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

AvatarComponent.propTypes = {
  userName: PropTypes.string,
  avatarNotification:  PropTypes.string,
  avatarImageSrc:  PropTypes.string,
  avatarClassName: PropTypes.string,
  avatarSize: PropTypes.string,
  avatarStatus:  PropTypes.string,
  description:  PropTypes.string,
  avatarNameDisplay:  PropTypes.bool,
  avatarDark:  PropTypes.bool,
  avatarLogoIcon:  PropTypes.string
};

export default AvatarComponent;