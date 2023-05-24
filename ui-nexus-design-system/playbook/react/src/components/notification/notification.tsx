import React from 'react';
import { NexusNotification } from '@nexus/react';

interface NotificationComponentProps {
  variant: 'info' | 'error' | 'warning' | 'success';
  message: string;
}

const NotificationComponent: React.FC<NotificationComponentProps> = (props) => (
  <>
    <div className="nexus-rhythm-4">
      <NexusNotification data-testid="informational-notification-message" {...props}>
        {props.message}
      </NexusNotification>
    </div>

    <div className="nexus-rhythm-4">
      <NexusNotification data-testid="error-notification-message" variant="error">
        Error notification message.
      </NexusNotification>
    </div>

    <div className="nexus-rhythm-4">
      <NexusNotification data-testid="success-notification-message" variant="success">
        Success notification message.
      </NexusNotification>
    </div>

    <div className="nexus-rhythm-4">
      <NexusNotification data-testid="warning-notification-message" variant="warning">
        Warning notification message.
      </NexusNotification>
    </div>
  </>
);

NotificationComponent.defaultProps = {
  variant: 'info',
  message: 'Informational notification message.'
};

export default NotificationComponent;
