import React from 'react';
import { chipDarkTheme } from '../../constants';
import { NexusChip } from '@nexus/react';

const ChipOnDarkThemeComponent: React.FC = () => {
    return (
        <div className="nexus-theme-dark" style={{ padding: '1em' }}>
            <NexusChip
                data-testid="chip-theme-dark-removable"
                removable={true}>{chipDarkTheme.text}</NexusChip>
        </div>
    )
};
export default ChipOnDarkThemeComponent;
