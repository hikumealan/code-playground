import React from 'react';
import { NexusPinEntry } from '@nexus/react';


const PinEntryDisabledComponent: React.FC = () => (
    <div className='nexus-center-xs nexus-mt-5'>
        <NexusPinEntry length={4} disabled type='tel' data-testid="pin-entry"></NexusPinEntry>
    </div>
);


export default PinEntryDisabledComponent;
