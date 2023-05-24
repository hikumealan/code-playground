import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  NexusAccordion,
  NexusAccordionTrigger,
  NexusAccordionContent,
  NexusAccordionGroup,
  NexusIcon
} from '@nexus/react';
import { propSize } from '@nexus/core/dist/types/components/nexus-accordion/nexus-accordion';
import { accordionGroup } from '../../constants';

const accordionData = accordionGroup;

export const AccordionGroupComponent = () => {
  const [accordionStates, setAccordionState] = useState(getData());

  const setAccordionStateHandler = (idx: string | number) => {
    const states = getData();
    states[idx] = !states[idx];
    setAccordionState(states);
  };

  return (
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
  );
};

const AccordionWrapperComponent = (props: {
  toggleAccordion: boolean;
  icon: string;
  setToggleHandler: (arg: boolean) => void;
  size: propSize;
  position: 'start' | 'center' | 'end';
  header: React.ReactNode;
  content: React.ReactNode;
}) => (
  <NexusAccordion
    open={props.toggleAccordion}
    onToggleEvent={() => props.setToggleHandler(!props.toggleAccordion)}
    size={'lg'}
  >
    <NexusAccordionTrigger align={props.position}>
      <h1 className="nexus-body">{props.header}</h1>
    </NexusAccordionTrigger>
    <NexusAccordionContent>
      <NexusIcon src={props.icon}></NexusIcon> {props.content}
      {props.content}
    </NexusAccordionContent>
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
  size: 'lg',
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
      icon={accordionData[props.index].icon}
      setToggleHandler={() => props.stateHandler(props.index)}
    />
  );
};

const getData = (): { [id: string]: boolean } => {
  const states: { [id: string]: boolean } = {};
  accordionData.forEach((_, idx) => (states[idx] = false));
  return states;
};

export default AccordionGroupComponent;
