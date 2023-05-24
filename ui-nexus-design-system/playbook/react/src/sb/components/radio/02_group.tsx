import React, { useState } from 'react';
import { group } from '../../constants';


import { NexusLabel, NexusRadio } from '@nexus/react';

const RadioExampleComponent: React.FC = () => {
    const [value1, setValue1] = useState('');

    return (
        <>
            <section className="nexus-rhythm-5">
                <NexusLabel>{group.label}</NexusLabel>
                <div className="nexus-col-xs-1">

                    <NexusRadio
                        data-testid="option1"
                        checked={value1 === 'option1'}
                        name="frameworks"
                        disabled={false}
                        onInput={(event: any) => setValue1(event.target.value)}
                        aria-hidden="true"
                    >
                        {group.first}
                    </NexusRadio>
                </div>

                <div className="nexus-col-xs-1">

                    <NexusRadio
                        data-testid="option2"
                        checked={value1 === 'option2'}
                        name="frameworks"
                        disabled={false}
                        onInput={(event: any) => setValue1(event.target.value)}
                        aria-hidden="true"
                    >
                        {group.second}
                    </NexusRadio>
                </div>

                <div className="nexus-col-xs-1">
                    <NexusRadio
                        data-testid="disled-option3"
                        checked={value1 === 'option3'}
                        name="frameworks"
                        disabled={false}
                        onInput={(event: any) => setValue1(event.target.value)}
                        aria-hidden="true"
                    >
                        {group.third}
                    </NexusRadio>
                </div>

            </section>
        </>
    );
};

export default RadioExampleComponent;
