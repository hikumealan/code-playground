import React from 'react';

import { NexusToast } from '@nexus/react';

interface ToastComponentProps {
  autoClose: number;
  closeable: boolean;
  show: boolean;
  position: 'top' | 'bottom' | undefined;
  variant: 'info' | 'success' | 'warning' | 'error' | 'custom';
}

const ToastComponent: React.FC<ToastComponentProps> = (props) => {
  return (
    <>
      <h5 className="nexus-h5">Toast Default</h5>
      <div className="nexus-rhythm-2">
        <NexusToast {...props} data-testid="information-toast-message">
          Default message.
        </NexusToast>
      </div>

      <h5 className="nexus-h5">Toast Variants</h5>
      <div className="nexus-rhythm-2">
        <NexusToast data-testid="information-toast-message">Information message.</NexusToast>
      </div>

      <div className="nexus-rhythm-2">
        <NexusToast data-testid="success-toast-message" className="nexus-rhythm-2" variant="success">
          Success message.
        </NexusToast>
      </div>

      <div className="nexus-rhythm-2">
        <NexusToast data-testid="warning-toast-message" className="nexus-rhythm-2" variant="warning">
          Warning message.
        </NexusToast>
      </div>

      <div className="nexus-rhythm-2">
        <NexusToast data-testid="error-toast-message" className="nexus-rhythm-2" variant="error">
          Error message.
        </NexusToast>
      </div>
    </>
  );
};

ToastComponent.defaultProps = {
  closeable: false,
  show: true,
  position: undefined,
  variant: 'info'
};

export default ToastComponent;