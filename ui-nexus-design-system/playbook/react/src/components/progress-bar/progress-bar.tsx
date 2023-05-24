import React from 'react';

import { NexusProgressBar } from '@nexus/react';

interface ProgressBarComponentProps {
  circle: boolean;
  error: boolean;
  indeterminate: boolean;
  value: number;
}

const ProgressBarComponent: React.FC<ProgressBarComponentProps> = (props) => {
  const { circle, error, indeterminate, value } = { ...props };

  return (
    <NexusProgressBar circle={circle} error={error} indeterminate={indeterminate} value={value}></NexusProgressBar>
  );
};

ProgressBarComponent.defaultProps = {
  circle: false,
  error: false,
  indeterminate: false,
  value: 50
};

export default ProgressBarComponent;
