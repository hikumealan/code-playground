import React from 'react';

import { NexusProgressBar, NexusProgressBarLabel } from '@nexus/react';

const ProgressBarExampleComponent: React.FC = () => {
  return (
    <>
      <p className="nexus-h5">With Label:</p>

      <NexusProgressBar data-testid="progress-label-meter" value={50}>
        <NexusProgressBarLabel>
          <span data-testid="progress-label" className="nexus-progress-bar-blue-label-span">
            Progress Label
          </span>
        </NexusProgressBarLabel>
      </NexusProgressBar>

      <br />

      <p className="nexus-h5">Error State:</p>

      <NexusProgressBar data-testid="error-state" value={50} error={true}></NexusProgressBar>

      <br />

      <p className="nexus-h5">Indeterminate:</p>

      <NexusProgressBar data-testid="indeterminate" indeterminate={true}></NexusProgressBar>

      <br />

      <p className="nexus-h5">Circle</p>

      <NexusProgressBar data-testid="circle" circle={true} value={100}></NexusProgressBar>

      <br />

      <p className="nexus-h5">Circle with Label</p>

      <NexusProgressBar data-testid="circle-with-label" circle={true} value={75}>
        <NexusProgressBarLabel>
          <span data-testid="circle-with-label-value" className="nexus-progress-bar-label-span">
            75%
          </span>
        </NexusProgressBarLabel>
      </NexusProgressBar>

      <br />

      <NexusProgressBar data-testid="circle-with-label" circle={true} value={42}>
        <NexusProgressBarLabel>
          <span data-testid="circle-with-label-value" className="nexus-progress-bar-label-span">
            42%
          </span>
        </NexusProgressBarLabel>
      </NexusProgressBar>

      <br />

      <p className="nexus-h5">Indeterminate Circle</p>

      <NexusProgressBar data-testid="indeterminate-circle" circle={true} indeterminate={true}></NexusProgressBar>

      <br />

      <p className="nexus-h5">Error Circle</p>

      <NexusProgressBar data-testid="error-circle" circle={true} error={true} value={75}></NexusProgressBar>
    </>
  );
};

export default ProgressBarExampleComponent;
