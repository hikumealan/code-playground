import React from 'react';
import { defaultToast } from '../../constants';
import PropTypes from 'prop-types';
import { NexusToast } from '@nexus/react';
import { typVariant1 } from '@nexus/core/dist/types/components/nexus-toast/nexus-toast';

const ToastComponent: React.FC = (props) => {
  const { variant = 'default' } = { ...props };


  return (
    <NexusToast
      show={defaultToast.show}
      closeable={defaultToast.closeable}
      {...props} data-testid="nexus-toast" variant={variant as typVariant1}>
      {defaultToast.message}
    </NexusToast>
  );
};

ToastComponent.propTypes = {
  closeable: PropTypes.bool,
  show: PropTypes.bool,
  position: PropTypes.string,
  variant: PropTypes.string
};

ToastComponent.defaultProps = {
  variant: 'default'
}

export default ToastComponent;
