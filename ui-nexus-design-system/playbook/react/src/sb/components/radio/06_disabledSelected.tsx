import React, { useState } from 'react';
import { disabledSelected } from '../../constants';


import { NexusRadio } from '@nexus/react';

const RadioExampleComponent: React.FC = () => {
  const [value2, setValue2] = useState('option1');

  return (
    <>
      <div className="nexus-center-xs nexus-mt-5">
        <div className="nexus-row nexus-center-xs">
          <NexusRadio
            data-testid="disabled-selected-option1"
            checked={value2 === 'option1'}
            name="group2"
            disabled={true}
            onInput={(event: any) => setValue2(event.target.value)}
            aria-hidden="true"
          >
            {disabledSelected.first}
          </NexusRadio>

          <NexusRadio
            data-testid="disabled-selected-option2"
            checked={value2 === 'option2'}
            name="group2"
            disabled={true}
            onInput={(event: any) => setValue2(event.target.value)}
            aria-hidden="true"
          >
            {disabledSelected.second}
          </NexusRadio>

          <NexusRadio
            data-testid="disabled-selected-option3"
            checked={value2 === 'option3'}
            name="group2"
            disabled={true}
            onInput={(event: any) => setValue2(event.target.value)}
            aria-hidden="true"
          >
            {disabledSelected.third}
          </NexusRadio>
        </div>
      </div>
    </>
  );
};

export default RadioExampleComponent;
