import React from 'react';

import { NexusPinEntry } from '@nexus/react';

const PinEntryExampleComponent: React.FC = () => (
  <>
    <p className="nexus-h5">Default</p>
    <NexusPinEntry data-testid="pin-entry-default"></NexusPinEntry>

    <p className="nexus-h5">Custom Length</p>
    <NexusPinEntry data-testid="pin-entry-customLen" length={6}></NexusPinEntry>

    <p className="nexus-h5">Disabled</p>
    <NexusPinEntry data-testid="pin-entry-disabled" length={3} disabled></NexusPinEntry>
  </>
);

export default PinEntryExampleComponent;
