import React from 'react';
import { notification } from '../../constants';
import PropTypes from 'prop-types';
import { NexusNotification } from '@nexus/react';
import { typVariant } from '@nexus/core/dist/types/components/nexus-notification/nexus-notification';

const NotificationComponent: React.FC = (props) => {
  const { message = notification.text, variant = notification.variant } = { ...props };

  return (
    <div className="nexus-row nexus-around-xs">
      <div className="nexus-col-xs-1">
        <div className="nexus-row nexus-mt-2">
          <div className="nexus-col-xs-4">
            <NexusNotification data-testid="notification-message" {...props} variant={variant as typVariant}>
              {message}
            </NexusNotification>
          </div>
        </div>
      </div>
    </div>
  );
}

NotificationComponent.propTypes = {
  variant: PropTypes.string,
  message: PropTypes.string
};

export default NotificationComponent;
