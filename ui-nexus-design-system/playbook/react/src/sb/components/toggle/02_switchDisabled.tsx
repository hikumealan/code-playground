import React from 'react';

import { NexusToggle } from '@nexus/react';

const SwitchDisabledComponent: React.FC = () => {
    return (
        <>
            <NexusToggle data-testid="toggle-disabled" disabled />
        </>
    );
};

export default SwitchDisabledComponent;
