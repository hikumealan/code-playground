import React from 'react';
import { NexusStepper, NexusStepperItem } from '@nexus/react';

const StepperComponent: React.FC = () => {
  return (
    <>
      <NexusStepper>
        <NexusStepperItem status="active">
          <button aria-label="step1">Source data 1</button>
        </NexusStepperItem>
        <NexusStepperItem status="default">
          <button aria-current="step">Data exploration 1</button>
        </NexusStepperItem>
        <NexusStepperItem status="default">
          <a aria-label="step3">Feature sets 1</a>
        </NexusStepperItem>
        <NexusStepperItem status="default">
          <button aria-label="step4">Training 1</button>
        </NexusStepperItem>
        <NexusStepperItem status="default">
          <button aria-label="step5">Test & analysis 1</button>
        </NexusStepperItem>
      </NexusStepper>
      <NexusStepper>
        <NexusStepperItem status="complete">
          <button aria-label="step1">Source data 2</button>
        </NexusStepperItem>
        <NexusStepperItem status="active">
          <button aria-current="step">Data exploration 2</button>
        </NexusStepperItem>
        <NexusStepperItem status="default">
          <a aria-label="step3">Feature sets 2</a>
        </NexusStepperItem>
        <NexusStepperItem status="default">
          <button aria-label="step4">Training 2</button>
        </NexusStepperItem>
        <NexusStepperItem status="default">
          <button aria-label="step5">Test & analysis 2</button>
        </NexusStepperItem>
      </NexusStepper>
      <NexusStepper>
        <NexusStepperItem status="complete">
          <button aria-label="step1">Source data 3</button>
        </NexusStepperItem>
        <NexusStepperItem status="complete">
          <button aria-current="step">Data exploration 3</button>
        </NexusStepperItem>
        <NexusStepperItem status="active">
          <a aria-label="step3">Feature sets 3</a>
        </NexusStepperItem>
        <NexusStepperItem status="default">
          <button aria-label="step4">Training 3</button>
        </NexusStepperItem>
        <NexusStepperItem status="default">
          <button aria-label="step5">Test & analysis 3</button>
        </NexusStepperItem>
      </NexusStepper>
      <NexusStepper>
        <NexusStepperItem status="complete">
          <button aria-label="step1">Source data 4</button>
        </NexusStepperItem>
        <NexusStepperItem status="complete">
          <button aria-current="step">Data exploration 4</button>
        </NexusStepperItem>
        <NexusStepperItem status="error">
          <a aria-label="step3">Feature sets 4</a>
        </NexusStepperItem>
        <NexusStepperItem status="default">
          <button aria-label="step4">Training 4</button>
        </NexusStepperItem>
        <NexusStepperItem status="default">
          <button aria-label="step5">Test & analysis 4</button>
        </NexusStepperItem>
      </NexusStepper>
    </>
  );
};
export default StepperComponent;
