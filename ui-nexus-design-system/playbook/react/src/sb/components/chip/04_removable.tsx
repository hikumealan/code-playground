import React, { useState } from 'react';
import { removable } from '../../constants';
import { NexusCheckbox, NexusChip } from '@nexus/react';


const RemovableChipComponent: React.FC = () => {
    const [show, setShow] = useState(true);

    const triggerCloseEvent = () => {
        setShow(false);
    }

    const checkBoxSelection = (event: any) => {
        setShow(event.target.checked === true);
    }

    return (<div className="nexus-center-xs nexus-mt-5">
        <div className="nexus-row">
            <div className='nexus-col-xs-2 nexus-pl-5'>
                <NexusCheckbox checked={show} onClick={(event) => checkBoxSelection(event)}>{removable.checkboxText}</NexusCheckbox>
            </div>
            {show ? <div className='nexus-col-xs-2' >
                <NexusChip
                    id="Item-1"
                    data-testid="Item-1"
                    removable
                    onTriggerRemovableClick={() => triggerCloseEvent()}>{removable.text}</NexusChip>
            </div>: ''}
        </div>
    </div>);
};

export default RemovableChipComponent;
