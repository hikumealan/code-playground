import { NexusAccordion, NexusAccordionContent, NexusAccordionTrigger } from '@nexus/react';
import React, { useState } from 'react';
import { AccordionAlignment } from '../../constants';

const AccordionAlignmentComponent: React.FC = () => {
  const [openAcccordionWithLeftAligned, setAccordionOpenWithLeftAligned] = useState(false);
  const [openAcccordionWithCenterAligned, setAccordionOpenWithCenterAligned] = useState(false);
  const [openAcccordionWithRightAligned, setAccordionOpenWithRightAligned] = useState(false);

  return (
    <div>
      <div>
        <NexusAccordion
          open={openAcccordionWithLeftAligned}
          onToggleEvent={() => setAccordionOpenWithLeftAligned(!openAcccordionWithLeftAligned)}
        >
          <NexusAccordionTrigger align={'start'}>
            <h1 className="nexus-body">{AccordionAlignment.defaultPosition}</h1>
          </NexusAccordionTrigger>
          <NexusAccordionContent>{AccordionAlignment.defaultPositionDesc}</NexusAccordionContent>
        </NexusAccordion>
      </div>
      <br />

      <div>
        <NexusAccordion
          open={openAcccordionWithCenterAligned}
          onToggleEvent={() => setAccordionOpenWithCenterAligned(!openAcccordionWithCenterAligned)}
        >
          <NexusAccordionTrigger align={'center'}>
            <h1 className="nexus-body">{AccordionAlignment.alignCenter}</h1>
          </NexusAccordionTrigger>
          <NexusAccordionContent>{AccordionAlignment.alignCenterDesc}</NexusAccordionContent>
        </NexusAccordion>
      </div>
      <br />

      <div>
        <NexusAccordion
          open={openAcccordionWithRightAligned}
          onToggleEvent={() => setAccordionOpenWithRightAligned(!openAcccordionWithRightAligned)}
        >
          <NexusAccordionTrigger align={'end'}>
            <h1 className="nexus-body">{AccordionAlignment.alignRight}</h1>
          </NexusAccordionTrigger>
          <NexusAccordionContent>{AccordionAlignment.alignCenterDesc}</NexusAccordionContent>
        </NexusAccordion>
      </div>
    </div>
  );
};

export default AccordionAlignmentComponent;
