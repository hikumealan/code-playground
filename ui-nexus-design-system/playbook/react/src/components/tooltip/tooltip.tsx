import React from 'react';

import { NexusTooltip, NexusTooltipTrigger, NexusIcon, NexusTooltipContent } from '@nexus/react';
import ActionIcHelpOutline24px from '@nexus/core/dist/assets/icons/action/ic_help_outline_24px.svg';

interface TooltipComponentProps {
  allowClick: boolean;
  placement: 'top' | 'bottom' | 'left' | 'right';
}

const TooltipComponent: React.FC<TooltipComponentProps> = (props) => {
  const { allowClick, placement } = { ...props };

  return (
    <NexusTooltip allowClick={allowClick} placement={placement}>
      <NexusTooltipTrigger>
        <NexusIcon data-testid="tooltip-icon" src={ActionIcHelpOutline24px}></NexusIcon>
        <span data-testid="tooltip-content-main" className="nexus-visually-hidden">
          Help
        </span>
      </NexusTooltipTrigger>

      <NexusTooltipContent data-testid="tooltip-content">Tooltip Content</NexusTooltipContent>
    </NexusTooltip>
  );
};

TooltipComponent.defaultProps = {
  allowClick: true,
  placement: 'bottom'
};

export default TooltipComponent;
