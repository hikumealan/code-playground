import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NexusAccordion, NexusAccordionTrigger, NexusAccordionContent, NexusAccordionGroup } from '@nexus/react';

const accordionData = [
  {
    title: 'Accordion Title 1',
    info: `The content belongs to first accordion group 1 . `
  },
  {
    title: 'Accordion Title 2',
    info: `The content belongs to first accordion group 2.`
  },
  {
    title: 'Accordion Title 3',
    info: `The content belongs to first accordion group 3.`
  },
  {
    title: 'Accordion Title 4',
    info: `The content belongs to first accordion group 4.`
  }
];

const AccordionExampleComponent = () => {
  const [open, setOpen] = useState(false);
  const [openExampleAlignCenter, setopenExampleAlignCenter] = useState(false);
  const [openExampleAlignEnd, setopenExampleAlignEnd] = useState(false);
  const [openExampleSizeXS, setOpenExampleSizeXS] = useState(false);
  const [openExampleSizeS, setOpenExampleSizeS] = useState(false);
  const [openExampleSizeM, setOpenExampleSizeM] = useState(false);
  const [openExampleSizeL, setOpenExampleSizeL] = useState(false);
  const [openExampleSizeXL, setOpenExampleSizeXL] = useState(false);
  const [accordionStates, setAccordionState] = useState(getData());

  const setAccordionStateHandler = (idx: string | number) => {
    const states = getData();
    states[idx] = !states[idx];
    setAccordionState(states);
  };

  return (
    <>
      <div className="row">
        <div data-testid="acc-align-start" className="nexus-col-md-10">
          <p className="nexus-h5">
            Set <code>align="start | center | end"</code> to align nexus accordion title to float in "start | center |
            end". However the default accordion header aligns to left.
          </p>
          <AccordionWrapperComponent toggleAccordion={open} setToggleHandler={setOpen} />
        </div>
      </div>
      <br />

      <div className="row">
        <div data-testid="acc-align-center" className="nexus-col-md-10">
          <AccordionWrapperComponent
            toggleAccordion={openExampleAlignCenter}
            setToggleHandler={setopenExampleAlignCenter}
            position="center"
          />
        </div>
      </div>
      <br />

      <div className="row">
        <div data-testid="acc-align-end" className="nexus-col-md-10">
          <AccordionWrapperComponent
            toggleAccordion={openExampleAlignEnd}
            setToggleHandler={setopenExampleAlignEnd}
            position="end"
          />
        </div>
      </div>
      <br />

      <div className="row">
        <div data-testid="acc-size-xs" className="nexus-col-md-10">
          <p className="nexus-h5">
            Different size variants for accordion based on which the content is padded within the accordion.
          </p>
          <p className="nexus-h5">
            Accordion Size: <code>xs | sm | md | lg | xl </code>.
          </p>
          <AccordionWrapperComponent
            toggleAccordion={openExampleSizeXS}
            setToggleHandler={setOpenExampleSizeXS}
            size="xs"
          />
        </div>
      </div>
      <br />

      <div className="row">
        <div data-testid="acc-size-sm" className="nexus-col-md-10">
          <AccordionWrapperComponent
            toggleAccordion={openExampleSizeS}
            setToggleHandler={setOpenExampleSizeS}
            size="sm"
          />
        </div>
      </div>
      <br />

      <div className="row">
        <div data-testid="acc-size-md" className="nexus-col-md-10">
          <AccordionWrapperComponent
            toggleAccordion={openExampleSizeM}
            setToggleHandler={setOpenExampleSizeM}
            size="md"
          />
        </div>
      </div>
      <br />

      <div className="row">
        <div data-testid="acc-size-lg" className="nexus-col-md-10">
          <AccordionWrapperComponent
            toggleAccordion={openExampleSizeL}
            setToggleHandler={setOpenExampleSizeL}
            size="lg"
          />
        </div>
      </div>
      <br />

      <div className="row">
        <div data-testid="acc-size-xl" className="nexus-col-md-10">
          <AccordionWrapperComponent
            toggleAccordion={openExampleSizeXL}
            setToggleHandler={setOpenExampleSizeXL}
            size="xl"
          />
        </div>
      </div>
      <br />

      <div className="row">
        <div data-testid="acc-group" className="nexus-col-md-10">
          <p className="nexus-h5">Accordion Group.</p>
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
    </>
  );
};

const AccordionWrapperComponent = (props: {
  toggleAccordion: any;
  setToggleHandler: (arg0: boolean) => any;
  size: any;
  position: any;
  header:
  | string
  | number
  | boolean
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | React.ReactFragment
  | React.ReactPortal
  | null
  | undefined;
  content: any;
}) => (
  <NexusAccordion
    open={props.toggleAccordion}
    onToggleEvent={() => props.setToggleHandler(!props.toggleAccordion)}
    size={props.size}
  >
    <NexusAccordionTrigger align={props.position}>
      <h1 className="nexus-body">{props.header}</h1>
    </NexusAccordionTrigger>
    <NexusAccordionContent>{props.content}</NexusAccordionContent>
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
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget aliquam justo, nec iaculis enim. Praesent at cursus nisl, vel molestie sapien.`
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

export default AccordionExampleComponent;
