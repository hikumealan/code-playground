import React, { useState } from 'react';
import { groupDisabled } from '../../constants';


import { NexusRadio } from '@nexus/react';

const RadioExampleComponent: React.FC = () => {
  const [value1, setValue1] = useState('');

  return (
    <>
      <div className="nexus-center-xs nexus-mt-5">
        <div className="nexus-row nexus-center-xs">
          <NexusRadio
            data-testid="disabled-option1"
            checked={value1 === 'option1'}
            name="group1"
            disabled={true}
            onInput={(event: any) => setValue1(event.target.value)}
            aria-hidden="true"
          >
            {groupDisabled.first}
          </NexusRadio>

          <NexusRadio
            data-testid="disabled-option2"
            checked={value1 === 'option2'}
            name="group1"
            disabled={true}
            onInput={(event: any) => setValue1(event.target.value)}
            aria-hidden="true"
          >
            {groupDisabled.second}
          </NexusRadio>

          <NexusRadio
            data-testid="disabled-option3"
            checked={value1 === 'option3'}
            name="group1"
            disabled={true}
            onInput={(event: any) => setValue1(event.target.value)}
            aria-hidden="true"
          >
            {groupDisabled.third}
          </NexusRadio>
        </div>
      </div>
    </>
  );
};

export default RadioExampleComponent;
