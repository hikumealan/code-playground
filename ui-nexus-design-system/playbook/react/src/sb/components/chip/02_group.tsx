import React from 'react';
import { chipGroup } from '../../constants';
import { NexusChip, NexusChipGroup } from '@nexus/react';

const ChipGroupComponent: React.FC = () => (
    <div className="nexus-center-xs nexus-mt-5">
        <div className="nexus-row nexus-around-xs">
            <NexusChipGroup>
                <NexusChip data-testid="chip-group-1">{chipGroup.first}</NexusChip>
                <NexusChip data-testid="chip-group-2">{chipGroup.second}</NexusChip>
                <NexusChip data-testid="chip-group-3">{chipGroup.third}</NexusChip>
            </NexusChipGroup>
        </div>
    </div>
);

export default ChipGroupComponent;
