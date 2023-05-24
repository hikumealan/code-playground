import React, { useState } from 'react';
import { validation } from '../../constants';


import { NexusLabel, NexusSlider } from '@nexus/react';

interface ValidationProps {
    disabled: boolean;
    max: number;
    min: number;
    required: boolean;
}



const Validation: React.FC<ValidationProps> = (props) => {
    const [valueInfo, setValueInfo] = useState(5);
    const [experience, setExperience] = useState('medium advanced');

    const inputHandler = (event: any) => {
        setValueInfo(event.target.value)
        if (valueInfo >= 7) {
            setExperience('master')
        } else if (valueInfo >= 4) {
            setExperience('medium advanced')
        } else {
            setExperience('novice')
        }
    };

    return (
            <div className="nexus-row nexus-center-xs">
                <div className="nexus-col-xs-3">
                    <NexusLabel>{validation.text}</NexusLabel>
                </div>
                <div className="nexus-col-xs-3">
                    <NexusSlider
                        {...props} data-testid="slider"
                        onInput={inputHandler}
                    ></NexusSlider>
                </div>
                <div className="nexus-col-xs-3">
                    <p>If you have {valueInfo} years of experience, you are {experience}.</p>
                </div>
            </div >
    );
}

Validation.defaultProps = {
    disabled: false,
    max: 10,
    min: 0,
    required: false
};

export default Validation;
