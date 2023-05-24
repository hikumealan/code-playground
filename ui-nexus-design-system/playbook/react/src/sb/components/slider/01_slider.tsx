import React from 'react';

import { NexusFormField, NexusSlider } from '@nexus/react';

interface SliderComponentProps {
    disabled: boolean;
    max: number;
    min: number;
    required: boolean;
}

const SliderComponent: React.FC<SliderComponentProps> = (props) => (
    <NexusFormField>
        <NexusSlider {...props} data-testid="slider"></NexusSlider>
    </NexusFormField>
);

SliderComponent.defaultProps = {
    disabled: false,
    max: 100,
    min: 0,
    required: false
};

export default SliderComponent;
