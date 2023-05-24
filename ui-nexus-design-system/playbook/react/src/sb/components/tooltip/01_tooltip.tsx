import React from 'react';
import { DefaultToolTip } from '../../constants';
import PropTypes from 'prop-types';
import { NexusTooltip, NexusTooltipTrigger, NexusIcon, NexusTooltipContent } from '@nexus/react';


const TooltipComponent: React.FC = (props) => {

  return (
    <div className="nexus-center-xs nexus-mt-6">
    <NexusTooltip {...props}>
      <NexusTooltipTrigger> Get help
        <NexusIcon data-testid="tooltip-icon" src={DefaultToolTip.helpIconSrc}></NexusIcon>
        <span data-testid="tooltip-content-main" className="nexus-visually-hidden">
          {DefaultToolTip.tooltipTrigger}
        </span>
      </NexusTooltipTrigger>

      <NexusTooltipContent data-testid="tooltip-content">{DefaultToolTip.tooltipContent}</NexusTooltipContent>
    </NexusTooltip>
    </div>
  );
};

TooltipComponent.propTypes = {
  allowClick: PropTypes.bool,
  placement: PropTypes.string
};

export default TooltipComponent;
