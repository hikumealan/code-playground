import React, { useState } from 'react';
import { progressBarETA } from '../../constants';
import { NexusProgressBar } from '@nexus/react';

const ProgressBarEtaComponent: React.FC = () => {
  const [indeterminateState, setIndeterminateState] = useState(false);

  const triggerClickHandler = () => {
    setIndeterminateState(!indeterminateState);
  }

  return (
    <div className="nexus-center-xs nexus-pt-6">
      <div className="nexus-row">
        <div className="nexus-ml-6 nexus-col-md-4 nexus-mt-2">
          <NexusProgressBar indeterminate={indeterminateState} />
        </div>
        <div className="nexus-col-md-3">
          <button className="nexus-btn nexus-btn-large" onClick={() => triggerClickHandler()}>
            {indeterminateState ? progressBarETA.calculatingETA : progressBarETA.checkETA}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarEtaComponent;
