import React from 'react';
import { TooltipPosition } from '../../constants';
import { NexusTooltip, NexusTooltipTrigger, NexusIcon, NexusTooltipContent } from '@nexus/react';


const TooltipPositionComponent: React.FC = () => {

    return (
        <div className="nexus-center-xs nexus-mt-2">
            <div className='nexus-row'>
                <div className='nexus-col-xs-2'>
                    <NexusTooltip placement='bottom'>
                        <NexusTooltipTrigger>
                            <button className='nexus-btn btn nexus-btn-large'>
                                {TooltipPosition.bottomText}
                                <NexusIcon data-testid="tooltip-icon" src={TooltipPosition.iconSrc}></NexusIcon>
                                <span data-testid="tooltip-content-main" className="nexus-visually-hidden">
                                    {TooltipPosition.tooltipTriggerContent}
                                </span>
                            </button>
                        </NexusTooltipTrigger>

                        <NexusTooltipContent data-testid="tooltip-content">{TooltipPosition.tooltipContent}</NexusTooltipContent>
                    </NexusTooltip>
                </div>
                <div className='nexus-col-xs-2'>
                    <NexusTooltip placement='top'>
                        <NexusTooltipTrigger>
                            <button className='nexus-btn btn nexus-btn-large nexus-btn-primary'>
                                {TooltipPosition.topText}
                                <NexusIcon data-testid="tooltip-icon" src={TooltipPosition.iconSrc}></NexusIcon>
                                <span data-testid="tooltip-content-main" className="nexus-visually-hidden">
                                {TooltipPosition.tooltipContent}
                                </span>
                            </button>
                        </NexusTooltipTrigger>

                        <NexusTooltipContent data-testid="tooltip-content">{TooltipPosition.tooltipContent}</NexusTooltipContent>
                    </NexusTooltip>
                </div>
            </div>

            <div className="nexus-mt-2 nexus-mb-2"></div>

            <div className='nexus-row'>
                <div className='nexus-col-xs-2'>
                    <NexusTooltip placement='left'>
                        <NexusTooltipTrigger>
                            <button className='nexus-btn btn nexus-btn-large'>
                                {TooltipPosition.leftText}
                                <NexusIcon data-testid="tooltip-icon" src={TooltipPosition.iconSrc}></NexusIcon>
                                <span data-testid="tooltip-content-main" className="nexus-visually-hidden">
                                    {TooltipPosition.tooltipTriggerContent}
                                </span>
                            </button>
                        </NexusTooltipTrigger>

                        <NexusTooltipContent data-testid="tooltip-content">{TooltipPosition.tooltipContent}</NexusTooltipContent>
                    </NexusTooltip>
                </div>
                <div className='nexus-col-xs-2'>
                    <NexusTooltip placement='right'>
                        <NexusTooltipTrigger>
                            <button className='nexus-btn nexus-btn-large nexus-btn-primary'>
                                {TooltipPosition.rightText}
                                <NexusIcon data-testid="tooltip-icon" src={TooltipPosition.iconSrc}></NexusIcon>
                                <span data-testid="tooltip-content-main" className="nexus-visually-hidden">
                                    {TooltipPosition.tooltipTriggerContent}
                                </span>
                            </button>
                        </NexusTooltipTrigger>

                        <NexusTooltipContent data-testid="tooltip-content">{TooltipPosition.tooltipContent}</NexusTooltipContent>
                    </NexusTooltip>
                </div>
            </div>
        </div>
    );
};


export default TooltipPositionComponent;
