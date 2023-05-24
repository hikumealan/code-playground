import React, { useState } from 'react';

import { NexusRadio } from '@nexus/react';

const RadioExampleComponent: React.FC = () => {
  const [value1, setValue1] = useState('');

  const [value2, setValue2] = useState('option1');

  return (
    <>
      <p className="nexus-h5">Disabled</p>

      <section className="nexus-rhythm-5">
        <NexusRadio
          data-testid="disabled-option1"
          checked={value1 === 'option1'}
          name="group1"
          disabled={true}
          onInput={(event: any) => setValue1(event.target.value)}
          aria-hidden="true"
        >
          Option 1
        </NexusRadio>

        <NexusRadio
          data-testid="disabled-option2"
          checked={value1 === 'option2'}
          name="group1"
          disabled={true}
          onInput={(event: any) => setValue1(event.target.value)}
          aria-hidden="true"
        >
          Option 2
        </NexusRadio>

        <NexusRadio
          data-testid="disabled-option3"
          checked={value1 === 'option3'}
          name="group1"
          disabled={true}
          onInput={(event: any) => setValue1(event.target.value)}
          aria-hidden="true"
        >
          Option 3
        </NexusRadio>
      </section>

      <p className="nexus-h5">Disabled - selected</p>
      <section className="nexus-rhythm-5">
        <NexusRadio
          data-testid="disabled-selected-option1"
          checked={value2 === 'option1'}
          name="group2"
          disabled={true}
          onInput={(event: any) => setValue2(event.target.value)}
          aria-hidden="true"
        >
          Option 1
        </NexusRadio>

        <NexusRadio
          data-testid="disabled-selected-option2"
          checked={value2 === 'option2'}
          name="group2"
          disabled={true}
          onInput={(event: any) => setValue2(event.target.value)}
          aria-hidden="true"
        >
          Option 2
        </NexusRadio>

        <NexusRadio
          data-testid="disabled-selected-option3"
          checked={value2 === 'option3'}
          name="group2"
          disabled={true}
          onInput={(event: any) => setValue2(event.target.value)}
          aria-hidden="true"
        >
          Option 3
        </NexusRadio>
      </section>
    </>
  );
};

export default RadioExampleComponent;
