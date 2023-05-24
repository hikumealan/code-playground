import React from 'react';
import { NexusStepper, NexusStepperItem } from '@nexus/react';
import { StepperStatus } from '../../constants';
import { Link } from 'react-router-dom';

const StepperItemStatusComponent: React.FC = () => {
  return (
    <div className="nexus-center-xs nexus-pt-3 nexus-ml-6">
      <NexusStepper>
        <NexusStepperItem status="complete">
          <button aria-label="step1">{StepperStatus.createJourney}</button>
        </NexusStepperItem>
        <NexusStepperItem status="complete">
          <button aria-current="step">{StepperStatus.addJourneyStep}</button>
        </NexusStepperItem>
        <NexusStepperItem status="active">
        <button aria-label="step4">{StepperStatus.linkToJourneyStep}</button>
        </NexusStepperItem>
        <NexusStepperItem status="error">
          <Link to="#" className='nexus-btn nexus-btn-icon'>{StepperStatus.bindActionsToActivity}</Link>
        </NexusStepperItem>
        <NexusStepperItem status="default">
          <button aria-label="step5">{StepperStatus.activate}</button>
        </NexusStepperItem>
      </NexusStepper>
    </div>
  );
};
export default StepperItemStatusComponent;
