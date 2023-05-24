import React from 'react';

import { NexusTooltip, NexusTooltipTrigger, NexusTooltipContent } from '@nexus/react';

const TooltipExampleComponent: React.FC = () => (
  <>
    <p className="nexus-h5">Custom Content</p>

    <p className="nexus-h6">Tooltip</p>
    <p data-testid="tooltip-body">
      Lorem ipsum dolor sit amet,{' '}
      <NexusTooltip>
        <NexusTooltipTrigger data-testid="tooltip-default">consectetur</NexusTooltipTrigger>

        <NexusTooltipContent data-testid="tooltip-content-default">Default Tooltip Content</NexusTooltipContent>
      </NexusTooltip>{' '}
      adipiscing elit. Donec massa dui, bibendum et bibendum ut, facilisis nec lorem.
    </p>

    <p className="nexus-h6">Tooltip Placement (top, right, bottom, left)</p>
    <p>
      Lorem ipsum dolor sit amet,{' '}
      <NexusTooltip placement="bottom">
        <NexusTooltipTrigger data-testid="tooltip-bottom">consectetur</NexusTooltipTrigger>

        <NexusTooltipContent data-testid="tooltip-content-bottom">Tooltip Content on bottom</NexusTooltipContent>
      </NexusTooltip>{' '}
      adipiscing elit. Donec massa dui, bibendum et bibendum ut, facilisis nec lorem.
    </p>
    <p>
      Lorem ipsum dolor sit amet,{' '}
      <NexusTooltip placement="top">
        <NexusTooltipTrigger data-testid="tooltip-top">consectetur</NexusTooltipTrigger>

        <NexusTooltipContent data-testid="tooltip-content-top">Tooltip Content on top</NexusTooltipContent>
      </NexusTooltip>{' '}
      adipiscing elit. Donec massa dui, bibendum et bibendum ut, facilisis nec lorem.
    </p>
    <p>
      Lorem ipsum dolor sit amet,{' '}
      <NexusTooltip placement="right">
        <NexusTooltipTrigger data-testid="tooltip-right">consectetur</NexusTooltipTrigger>

        <NexusTooltipContent data-testid="tooltip-content-right">Tooltip Content on right</NexusTooltipContent>
      </NexusTooltip>{' '}
      adipiscing elit. Donec massa dui, bibendum et bibendum ut, facilisis nec lorem.
    </p>
    <p>
      Donec massa dui, bibendum et bibendum ut, facilisis nec lorem. Lorem ipsum dolor sit amet,{' '}
      <NexusTooltip placement="left">
        <NexusTooltipTrigger data-testid="tooltip-left">consectetur</NexusTooltipTrigger>

        <NexusTooltipContent>Tooltip Content on left</NexusTooltipContent>
      </NexusTooltip>{' '}
      adipiscing elit.
    </p>
    <p>
      Lorem ipsum dolor sit amet,{' '}
      <NexusTooltip placement="left">
        <NexusTooltipTrigger>consectetur Tooltip Content on left, auto calculates in case of overflow.</NexusTooltipTrigger>

        <NexusTooltipContent data-testid="tooltip-content-left">
          Tooltip Content on left, auto calculates in case of overflow.
        </NexusTooltipContent>
      </NexusTooltip>{' '}
      adipiscing elit. Donec massa dui, bibendum et bibendum ut, facilisis nec lorem.
      <br />Tooltip Content on left, auto calculates in case of overflow. <br/>
    </p>

    <p className="nexus-h6">Tooltip click disabled</p>
    <p>
      This is a ,{' '}
      <NexusTooltip allow-click="false" placement="top">
        <NexusTooltipTrigger>tooltip</NexusTooltipTrigger>

        <NexusTooltipContent data-testid="tooltip-content-Disabled">Tooltip Content</NexusTooltipContent>
      </NexusTooltip>{' '}
      that has click disabled.
    </p>
  </>
);

export default TooltipExampleComponent;
