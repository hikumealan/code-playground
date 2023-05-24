import React from 'react';
import { chipVariant } from '../../constants';
import { NexusChip, NexusChipGroup } from '@nexus/react';

const ChipVariant: React.FC = () => (
<div className="nexus-center-xs nexus-mt-5">
    <div className="nexus-row nexus-around-xs">
        <NexusChipGroup>
            <NexusChip> {chipVariant.default} </NexusChip>
            <NexusChip success> {chipVariant.success} </NexusChip>
            <NexusChip disabled> {chipVariant.disabled} </NexusChip>
            <NexusChip error> {chipVariant.failure} </NexusChip>
        </NexusChipGroup>
    </div>
</div>
);

export default ChipVariant;
