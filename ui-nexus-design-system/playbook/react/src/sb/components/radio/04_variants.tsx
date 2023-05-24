import React, { useState } from 'react';
import { variants } from '../../constants';

import { NexusLabel, NexusRadio } from '@nexus/react';

const RadioExampleComponent: React.FC = () => {
    const [value1, setValue1] = useState('option2');
    const [value2, setValue2] = useState('option4');

    return (
        <>
            <div className="nexus-col-xs ">

                <NexusLabel>{variants.first}</NexusLabel>

                <div className="nexus-col-xs-1">
                    <NexusRadio
                        data-testid="option1"
                        checked={value1 === 'option1'}
                        name="variants"
                        disabled={false}
                        onInput={(event: any) => setValue1(event.target.value)}
                        aria-hidden="true"
                    >
                        {variants.default}
                    </NexusRadio>
                </div>

                <div className="nexus-col-xs-1">
                    <NexusRadio
                        data-testid="option2"
                        checked={value1 === 'option2'}
                        name="variants"
                        disabled={false}
                        onInput={(event: any) => setValue1(event.target.value)}
                        aria-hidden="true"
                    >
                        {variants.checked}
                    </NexusRadio>
                </div>

                <NexusLabel>{variants.second}</NexusLabel>

                <div className="nexus-col-xs-1">
                    <NexusRadio
                        data-testid="option3"
                        checked={value2 === 'option3'}
                        name="variantDisabled"
                        disabled={true}
                        onInput={(event: any) => setValue2(event.target.value)}
                        aria-hidden="true"
                    >
                        {variants.disabled}
                    </NexusRadio>
                </div>

                <div className="nexus-col-xs-1">
                    <NexusRadio
                        data-testid="option4"
                        checked={value2 === 'option4'}
                        name="variantDisabled"
                        disabled={true}
                        onInput={(event: any) => setValue2(event.target.value)}
                        aria-hidden="true"
                    >
                        {variants.both}
                    </NexusRadio>
                </div>
            </div>
        </>
    );
};

export default RadioExampleComponent;
