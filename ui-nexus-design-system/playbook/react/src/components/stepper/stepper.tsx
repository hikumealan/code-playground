import React from 'react';
import { NexusStepper, NexusStepperItem } from '@nexus/react';

interface StepperComponentProps {
  steppertype: 'row' | 'column';
}

const StepperComponent: React.FC<StepperComponentProps> = (props) => {
  const { steppertype } = props;
  return (
    <>
      <NexusStepper steppertype={steppertype}>
        <NexusStepperItem status="complete">
          <button aria-label={'step1'}>Source data</button>
        </NexusStepperItem>
        <NexusStepperItem status="active">
          <button aria-current={'step'}>Data exploration</button>
        </NexusStepperItem>
        <NexusStepperItem status="default">
          <button aria-label={'step3'}>Feature sets</button>
        </NexusStepperItem>
        <NexusStepperItem status="warning">
          <button aria-label={'step4'}>Training</button>
        </NexusStepperItem>
        <NexusStepperItem>
          <button aria-label={'step5'}>Test & analysis</button>
        </NexusStepperItem>
      </NexusStepper>
    </>
  );
};
export default StepperComponent;
