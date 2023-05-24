import React, { useState } from 'react';
import { withIcon } from '../../constants';


import { NexusCard, NexusIcon, NexusRadio } from '@nexus/react';

const RadioExampleComponent: React.FC = () => {
    const [value1, setValue1] = useState('');

    return (
        <>
            <NexusCard>
                <div className="nexus-center-xs">
                    <h4 className='nexus-h4'>{withIcon.agreement}</h4>
                    <div dangerouslySetInnerHTML={{ __html: withIcon.details }}></div>
                    <div className="nexus-row nexus-center-xs">
                        <NexusRadio
                            data-testid="option1"
                            checked={value1 === 'option1'}
                            name="withIcon"
                            disabled={false}
                            onInput={(event: any) => setValue1(event.target.value)}
                            aria-hidden="true"
                        >
                            <NexusIcon src="./assets/icons/action/ic_done_24px.svg" size="md"
                                style={{ position: 'relative', bottom: '5px', color: '#44AB46' }}>
                            </NexusIcon>
                            <span style={{ position: 'relative', bottom: '11px', fontSize: '16px' }}>{withIcon.accept}</span>
                        </NexusRadio>
                        <NexusRadio
                            data-testid="option2"
                            checked={value1 === 'option2'}
                            name="withIcon"
                            disabled={false}
                            onInput={(event: any) => setValue1(event.target.value)}
                            aria-hidden="true"
                        >
                            <NexusIcon src="./assets/icons/content/ic_clear_24px.svg" size="md"
                                style={{ position: 'relative', bottom: '5px', color: '#DA3510' }}>
                            </NexusIcon>
                            <span style={{ position: 'relative', bottom: '11px', fontSize: '16px' }}>{withIcon.reject}</span>
                        </NexusRadio>
                    </div>
                </div>
            </NexusCard >
        </>
    );
};

export default RadioExampleComponent;
