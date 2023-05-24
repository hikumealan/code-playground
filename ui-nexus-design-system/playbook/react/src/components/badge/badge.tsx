import React from 'react';

import { NexusBadge } from '@nexus/react';
import { propVariant } from '@nexus/core/dist/types/components/nexus-badge/nexus-badge';

interface BadgeComponentProps {
  variant: propVariant;
}

const BadgeComponent: React.FC<BadgeComponentProps> = (props) => <NexusBadge {...props}>1</NexusBadge>;

BadgeComponent.defaultProps = {
  variant: 'default'
};

export default BadgeComponent;
