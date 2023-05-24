import html from '!!raw-loader!../../examples/avatar/01_avatar.html';

export default   ({
  avatarClassName = "''",
  avatarDark = false,
  avatarImageSrc = '""',
  avatarLogoIcon = '""',
  avatarNameDisplay = true,
  avatarNotification = '""',
  avatarSize = 'md',
  avatarStatus = '""',
  description = '""',
  userName = 'Name'
}) => {
  const component = document.createElement('div');
  const id = 'avatar-scripts';
  component.innerHTML = html
  .replace('avatarClassName=\'\'', `avatar-class-name=${avatarClassName}`)
  .replace('avatarDark=false', `avatar-dark=${new Boolean(avatarDark).toString()}`)
  .replace('avatarImageSrc=\'\'', `avatar-image-src=${avatarImageSrc}`)
  .replace('avatarLogoIcon=\'\'', `avatar-logo-icon=${avatarLogoIcon}`)
  .replace('avatarNameDisplay=true', `avatar-name-display=${new Boolean(avatarNameDisplay).toString()}`)
  .replace('avatarNotification=\'\'', `avatar-notification=${avatarNotification}`)
  .replace('avatarSize=\'md\'', `avatar-size=${avatarSize}`)
  .replace('avatarStatus=\'\'', `avatar-status=${avatarStatus}`)
  .replace('description=\'\'', `description=${description}`)
  .replace('userName=\'Name\'', `user-name=${userName}`)
  return component;
};