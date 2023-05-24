import React, { useState } from 'react';
import { NexusFormField, NexusLabel, NexusInput } from '@nexus/react';
import Note from '../notecontainer/note';

const FormFieldComponent: React.FC = () => {
    const [value, setValue] = useState('');

    return (
        <div>
            <NexusFormField>
                <NexusLabel
                    data-testid="label-first-name"
                >
                    First name
                </NexusLabel>
                <NexusInput
                    data-testid="form-field-textbox"
                    value={value} onInput={(event: any) => setValue(event.target.value)}>
                </NexusInput>
            </NexusFormField>
            <Note noteType="eventNote" />
        </div>
    );
};

export default FormFieldComponent;
