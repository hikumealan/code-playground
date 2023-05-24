import React from 'react';

import { NexusChip, NexusChipGroup } from '@nexus/react';

const ChipExampleComponent: React.FC = () => {
  const onTriggerRemovableClickCall = () => {
    // Do something
  };

  return (
    <>
      <p className="nexus-h5">Disabled</p>
      <NexusChip
        data-testid="chip-disabled"
        disabled={true}>Chip text
      </NexusChip>

      <p className="nexus-h5">Removable</p>
      <NexusChip
        data-testid="chip-removable"
        removable={true} onTriggerRemovableClick={() => { onTriggerRemovableClickCall() }}>Chip text
      </NexusChip>

      <p className="nexus-h5">Success</p>
      <NexusChip
        data-testid="chip-success"
        success={true}>Chip text
      </NexusChip>

      <p className="nexus-h5">Chip Group</p>
      <p>Chips should normally be placed inside of the ChipGroup component. This wrChipExampleComponenter provides styling so that the Chips will display inline with one another.</p>

      <NexusChipGroup>
        <NexusChip
          data-testid="chip-group-1"
        >
          Chip 1
        </NexusChip>
        <NexusChip
          data-testid="chip-group-2"
        >
          Chip 2
        </NexusChip>
        <NexusChip
          data-testid="chip-group-3"
        >
          Chip 3
        </NexusChip>
      </NexusChipGroup>

      <p className="nexus-h5">Dark Theme</p>
      <div className="nexus-theme-dark" style={{ padding: '1em' }}>
        <NexusChip
          data-testid="chip-theme-dark-removable"
          removable={true}>Chip text</NexusChip>
      </div>
    </>
  )
};
export default ChipExampleComponent;
