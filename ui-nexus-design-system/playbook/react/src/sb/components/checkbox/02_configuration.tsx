import React, { useState } from 'react';
import { configuration } from '../../constants';
import { NexusCheckbox } from '@nexus/react';

const SetupComponent: React.FC = () => {
  const [checkedValue, setCheckedValue] = useState(false);

  const [indeterminateValue, setIndeterminateValue] = useState(false);

  const [disabledValue, setDisabledValue] = useState(false);

  return (
    <>
      <p className="nexus-h5">{configuration.title}</p>

      <NexusCheckbox
        data-testid="Check"
        className="nexus-rhythm-2"
        onInput={(event: any) => setCheckedValue(event.target.checked)}
      >
        {configuration.check}
      </NexusCheckbox>
      <NexusCheckbox
        data-testid="Indeterminate"
        className="nexus-rhythm-2"
        onInput={(event: any) => setIndeterminateValue(event.target.checked)}
      >
        {configuration.indeterminate}
      </NexusCheckbox>
      <NexusCheckbox
        data-testid="Disabled"
        className="nexus-rhythm-2"
        onInput={(event: any) => setDisabledValue(event.target.checked)}
      >
        {configuration.disabled}
      </NexusCheckbox>

      <p className="nexus-h5">Example:</p>

      <NexusCheckbox
        checked={checkedValue}
        indeterminate={indeterminateValue}
        disabled={disabledValue}
        data-testid="Example"
        className="nexus-rhythm-2">{configuration.example}
      </NexusCheckbox>
    </>
  );
};

export default SetupComponent;
