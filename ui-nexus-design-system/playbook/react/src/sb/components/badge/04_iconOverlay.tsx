import React from 'react';
import { iconOverlay } from '../../constants';
import PropTypes from 'prop-types';
import { NexusBadge, NexusIcon } from '@nexus/react';


export const IconOverlayComponent: React.FC = () => (
  <div className="nexus-row nexus-around-xs nexus-mt-5">
    <div className="nexus-col-xs-1 nexus-col-md-1">
      <button className="nexus-btn nexus-btn-icon">
        <NexusIcon src={iconOverlay.logo}></NexusIcon>
        <NexusBadge overlap variant="error"></NexusBadge>
      </button>
    </div>
    <div className="nexus-col-xs-1 nexus-col-md-1">
      <button className="nexus-btn nexus-btn-icon">
        <NexusIcon src={iconOverlay.alarm}></NexusIcon>
        <NexusBadge overlap variant="success"></NexusBadge>
      </button>
    </div>
    <div className="nexus-col-xs-1 nexus-col-md-1">
      <button className="nexus-btn nexus-btn-icon">
        <NexusIcon src={iconOverlay.email}></NexusIcon>
        <NexusBadge overlap variant="warning"></NexusBadge>
      </button>
    </div>
    <div className="nexus-col-xs-1 nexus-col-md-1">
      <button className="nexus-btn nexus-btn-icon">
        <NexusIcon src={iconOverlay.favourite}></NexusIcon>
        <NexusBadge overlap variant="default"></NexusBadge>
      </button>
    </div>
  </div>
);

IconOverlayComponent.propTypes = {
  variant: PropTypes.string
}

IconOverlayComponent.defaultProps = {
  variant: 'error'
};

export default IconOverlayComponent;