import React from 'react';
import PropTypes from 'prop-types';
import { DefaultStepper } from '../../constants';
import { NexusStepper, NexusStepperItem } from '@nexus/react';

const StepperComponent: React.FC = (props) => {
  const { steppertype = "row" } = { ...props };
  return (
    <div className="nexus-center-xs nexus-pt-3 nexus-ml-6">
      <NexusStepper steppertype={steppertype}>
        <NexusStepperItem status="complete">
          <button aria-label={'step1'}>{DefaultStepper.source}</button>
        </NexusStepperItem>
        <NexusStepperItem status="active">
          <button aria-current={'step'}>{DefaultStepper.dataExploration}</button>
        </NexusStepperItem>
        <NexusStepperItem status="default">
          <button aria-label={'step3'}>{DefaultStepper.featureSets}</button>
        </NexusStepperItem>
        <NexusStepperItem status="warning">
          <button aria-label={'step4'}>{DefaultStepper.training}</button>
        </NexusStepperItem>
        <NexusStepperItem>
          <button aria-label={'step5'}>{DefaultStepper.test}</button>
        </NexusStepperItem>
      </NexusStepper>
    </div>
  );
};

StepperComponent.propTypes = {
  steppertype: PropTypes.string
}

export default StepperComponent;
