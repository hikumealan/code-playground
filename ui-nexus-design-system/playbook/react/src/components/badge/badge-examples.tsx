import React from 'react';

import { NexusBadge, NexusIcon } from '@nexus/react';
import Logo from '@nexus/core/dist/assets/icons/alert/ic_add_alert_24px.svg';

const BadgeExampleComponent: React.FC = () => (
  <>
    <p className="nexus-h5">Error</p>
    <NexusBadge data-testid="error-badge" variant="error">
      1
    </NexusBadge>

    <p className="nexus-h5">Success</p>
    <NexusBadge data-testid="success-badge" variant="success">
      1
    </NexusBadge>

    <p className="nexus-h5">Warning</p>
    <NexusBadge data-testid="warning-badge" variant="warning">
      1
    </NexusBadge>

    <p className="nexus-h5">Badge on Button</p>
    <div style={{ marginTop: '10px' }}>
      <button className="nexus-btn">
        Click me!
        <NexusBadge data-testid="badge-on-button" overlap={true}>
          New
        </NexusBadge>
      </button>
    </div>

    <p className="nexus-h5">Badge on Icon</p>
    <div style={{ marginTop: '10px' }}>
      <button className="nexus-btn-icon" id="alert" title="alert">
        <NexusIcon data-testid="bell-icon" src={Logo} />
        <NexusBadge data-testid="badge-on-icon" overlap={true} variant="error"></NexusBadge>
      </button>
    </div>
  </>
);

export default BadgeExampleComponent;
