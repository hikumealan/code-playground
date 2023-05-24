import React from 'react';
import { toastVariants } from '../../constants';
import { NexusToast } from '@nexus/react';

const ToastVariantComponent: React.FC = () => {

  return (
      <>
        <NexusToast
            data-testid="toast-info"
            closeable={toastVariants.closeable}
            show={toastVariants.show}
            variant='info'>{toastVariants.info}</NexusToast>
        <div className='nexus-pt-1 nexus-pb-1'></div>
        <NexusToast
            data-testid="toast-error"
           closeable={toastVariants.closeable}
           show={toastVariants.show}
            variant='error'>{toastVariants.error}</NexusToast>
        <div className='nexus-pt-1 nexus-pb-1'></div>
        <NexusToast
            data-testid="toast-success"
           closeable={toastVariants.closeable}
           show={toastVariants.show}
            variant='success'>{toastVariants.success}</NexusToast>
        <div className='nexus-pt-1 nexus-pb-1'></div>
        <NexusToast
            data-testid="toast-warning"
           closeable={toastVariants.closeable}
           show={toastVariants.show}
            variant='warning'>{toastVariants.warning}</NexusToast>
        <div className='nexus-pt-1 nexus-pb-1'></div>
        <NexusToast
            data-testid="toast-custom"
           closeable={toastVariants.closeable}
           show={toastVariants.show}
            variant='custom'
            iconSrc={toastVariants.iconSrc}>{toastVariants.custom}</NexusToast>
      </>
  );
};

export default ToastVariantComponent;
