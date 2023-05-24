import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NexusAccordion, NexusAccordionTrigger, NexusAccordionContent, NexusAccordionGroup } from '@nexus/react';
import { propSize } from '@nexus/core/dist/types/components/nexus-accordion/nexus-accordion';
import { AccordionGroupWithTableSlotData } from '../../constants';

const accordionData = AccordionGroupWithTableSlotData;

export const AccordionGroupWithTableSlotComponent = () => {
    const [accordionStates, setAccordionState] = useState(getData());

    const setAccordionStateHandler = (idx: string | number) => {
        const states = getData();
        states[idx] = !states[idx];
        setAccordionState(states);
    };

    return (
        <div className="nexus-row">
            <div data-testid="acc-group" className="nexus-col-xs-4">
                <NexusAccordionGroup>
                    {accordionData.map((rec, idx) => (
                        <AccordionGroupExample
                            key={idx}
                            data-testid="acc-group"
                            title={rec.title}
                            info={rec.info}
                            stateHandler={setAccordionStateHandler}
                            index={idx}
                            accordionState={accordionStates[idx]}
                        />
                    ))}
                </NexusAccordionGroup>
            </div>
        </div>
    );
};

const AccordionWrapperComponent = (props: {
    toggleAccordion: boolean;
    setToggleHandler: (arg: boolean) => void;
    size: propSize;
    position: "start" | "center" | "end";
    header: React.ReactNode;
    content: string;
}) => (
    <NexusAccordion
        open={props.toggleAccordion}
        onToggleEvent={() => props.setToggleHandler(!props.toggleAccordion)}
        size={props.size}
    >
        <NexusAccordionTrigger align={props.position}>
            <h1 className="nexus-body">{props.header}</h1>
        </NexusAccordionTrigger>
        <NexusAccordionContent dangerouslySetInnerHTML={{__html: props.content}}></NexusAccordionContent>
    </NexusAccordion>
);

AccordionWrapperComponent.propTypes = {
    toggleAccordion: PropTypes.bool,
    setToggleHandler: PropTypes.func,
    position: PropTypes.string,
    size: PropTypes.string,
    header: PropTypes.string,
    content: PropTypes.string
};

AccordionWrapperComponent.defaultProps = {
    position: 'start',
    size: 'md',
    header: 'Accordion Title',
    content: 'Default accordion text.'
};

const AccordionGroupExample = (props: any) => {
    const [open, setOpen] = useState(props.accordionState[props.index]);
    useEffect(() => setOpen(props.accordionState), [props.accordionState]);

    return (
        <AccordionWrapperComponent
            toggleAccordion={open}
            header={accordionData[props.index].title}
            content={accordionData[props.index].info}
            setToggleHandler={() => props.stateHandler(props.index)}
        />
    );
};

const getData = (): { [id: string]: boolean } => {
    const states: { [id: string]: boolean } = {};
    accordionData.forEach((_, idx) => (states[idx] = false));
    return states;
};

export default AccordionGroupWithTableSlotComponent;