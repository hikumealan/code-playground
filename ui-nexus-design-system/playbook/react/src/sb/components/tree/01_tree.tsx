import React from 'react';
import { DefaultTree } from '../../constants';
import { NexusTree, NexusTreeTrigger, NexusTreeContent } from '@nexus/react';

interface TreeComponentProps {
  open: boolean;
}

const TreeComponent: React.FC<TreeComponentProps> = (props) => {
  const { open } = { ...props };

  return (
    <NexusTree open={open}>
      <NexusTreeTrigger data-testid="tree-trigger">{DefaultTree.title}</NexusTreeTrigger>
      <NexusTreeContent>
        <ul data-testid="tree-content-item">
          <li>{DefaultTree.option_1}</li>
          <li>{DefaultTree.option_2}</li>
          <li>{DefaultTree.option_3}</li>
        </ul>
      </NexusTreeContent>
    </NexusTree>
  );
};

TreeComponent.defaultProps = {
  open: false
};

export default TreeComponent;
