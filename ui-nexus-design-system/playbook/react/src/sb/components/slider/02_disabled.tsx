import React from 'react';

import { NexusFormField, NexusSlider } from '@nexus/react';

const SliderDisabledComponent: React.FC = () => (
    <>
        <NexusFormField>
            <NexusSlider
                disabled
                data-testid="slider-disabled"
            ></NexusSlider>
        </NexusFormField>
    </>
);
export default SliderDisabledComponent;
