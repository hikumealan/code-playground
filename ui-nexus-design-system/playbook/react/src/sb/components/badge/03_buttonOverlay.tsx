import React from 'react';
import { buttonOverlay } from '../../../../../stories/data/badge';
import { NexusBadge } from '@nexus/react';
import PropTypes from 'prop-types';

export const ButtonOverlayComponent: React.FC = (props) => (
    <div className='nexus-mt-5 nexus-center-xs'>
      <button className="nexus-btn">
        {buttonOverlay.text}
        <NexusBadge data-testid="badge-on-button" {...props} variant='default' overlap={true}>
          {buttonOverlay.label}
        </NexusBadge>
      </button>
    </div>
);

ButtonOverlayComponent.propTypes = {
  variant: PropTypes.string,
};

ButtonOverlayComponent.defaultProps = {
  variant: 'default'
};

export default ButtonOverlayComponent;
