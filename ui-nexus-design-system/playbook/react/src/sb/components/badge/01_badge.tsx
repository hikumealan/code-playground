import React from 'react';
import { NexusBadge } from '@nexus/react';
import { propVariant } from '@nexus/core/dist/types/components/nexus-badge/nexus-badge';

export const BadgeComponent: React.FC<{variant: propVariant, overlap: boolean, label: string}> = (props) => {
  const label = props.label;

  return(<div className='nexus-center-xs nexus-mt-5'>
    <NexusBadge {...props} data-testid="nexus-badge">
      <span className="nexus-body">{label}</span>
    </NexusBadge>
  </div>);
};

export default BadgeComponent;