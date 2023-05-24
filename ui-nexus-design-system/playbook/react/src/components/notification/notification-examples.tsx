import { NexusNotification } from '@nexus/react';
import React from 'react';

const NotificationExamples: React.FC = () => {
  return (
    <>
      <div className="nexus-rhythm-4">
        <NexusNotification data-testid="informational-notification-message">
          Informational notification message.
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
};

export default NotificationExamples;
