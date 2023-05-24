import React, { useState } from 'react';
import { accordion } from '../../constants';
import { NexusAccordion, NexusAccordionTrigger, NexusAccordionContent } from '@nexus/react';
import PropTypes from 'prop-types';
import { propSize } from '@nexus/core/dist/types/components/nexus-accordion/nexus-accordion';

export const AccordionComponent: React.FC = (props) => {
  const { open = accordion.open, size = accordion.size as propSize, align = 'start' } = { ...props };
  const [openAcccordion, setAccordionOpen] = useState(open);

  return (
    <NexusAccordion open={openAcccordion} onToggleEvent={() => setAccordionOpen(!openAcccordion)} size={size}>
      <NexusAccordionTrigger align={align}>
        <h1 className="nexus-body">{accordion.title}</h1>
      </NexusAccordionTrigger>
      <NexusAccordionContent>{accordion.description}</NexusAccordionContent>
    </NexusAccordion>
  );
};

AccordionComponent.propTypes = {
  open: PropTypes.bool,
  size: PropTypes.string
};

AccordionComponent.defaultProps = {
  open: false,
  size: 'md',
  align: 'start'
};

export default AccordionComponent;
