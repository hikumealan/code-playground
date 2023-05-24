import React from 'react';

import { NexusTree, NexusTreeTrigger, NexusTreeContent } from '@nexus/react';

interface TreeComponentProps {
  open: boolean;
}

const TreeComponent: React.FC<TreeComponentProps> = (props) => {
  const { open } = { ...props };

  return (
    <NexusTree open={open}>
      <NexusTreeTrigger data-testid="tree-trigger">Click to expand</NexusTreeTrigger>
      <NexusTreeContent>
        <ul data-testid="tree-content-item">
          <li>Tree content item</li>
          <li>Tree content item</li>
          <li>Tree content item</li>
        </ul>
      </NexusTreeContent>
    </NexusTree>
  );
};

TreeComponent.defaultProps = {
  open: false
};

export default TreeComponent;
