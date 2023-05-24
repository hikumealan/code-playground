import React from 'react';

import { NexusFormField, NexusLabel, NexusSlider } from '@nexus/react';

const SliderExampleComponent: React.FC = () => (
  <>
    <NexusFormField>
      <NexusLabel>Slider Disabled</NexusLabel>
      <NexusSlider 
      disabled
      data-testid="slider-disabled"
      ></NexusSlider>
    </NexusFormField>
  </>
);
export default SliderExampleComponent;
