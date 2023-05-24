import React, { useState } from 'react';

import { NexusCheckbox } from '@nexus/react';

const CheckboxExampleComponent: React.FC = () => {
  const [checkedValue, setCheckedValue] = useState(false);

  const [indeterminateValue, setIndeterminateValue] = useState(false);

  const [disabledValue, setDisabledValue] = useState(false);

  return (
    <>
      <p className="nexus-h5">Checkbox configuration:</p>

      <NexusCheckbox
        data-testid="Check"
        className="nexus-rhythm-2"
        onInput={(event: any) => setCheckedValue(event.target.checked)}
      >
        Check
      </NexusCheckbox>
      <NexusCheckbox
        data-testid="Indeterminate"
        className="nexus-rhythm-2"
        onInput={(event: any) => setIndeterminateValue(event.target.checked)}
      >
        Indeterminate
      </NexusCheckbox>
      <NexusCheckbox
        data-testid="Disabled"
        className="nexus-rhythm-2"
        onInput={(event: any) => setDisabledValue(event.target.checked)}
      >
        Disabled
      </NexusCheckbox>

      <p className="nexus-h5">Example:</p>

      <NexusCheckbox
        checked={checkedValue}
        indeterminate={indeterminateValue}
        disabled={disabledValue}
        data-testid="Example"
        className="nexus-rhythm-2">

        Example
      </NexusCheckbox>
    </>
  );
};

export default CheckboxExampleComponent;
