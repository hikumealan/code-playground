import React, { useState } from 'react';

import { NexusAccordion, NexusAccordionTrigger, NexusAccordionContent } from '@nexus/react';

interface AccordionComponentProps {
  open: boolean;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const AccordionComponent: React.FC<AccordionComponentProps> = (props) => {
  const { open, size } = { ...props };
  const [openAcccordion, setAccordionOpen] = useState(open);

  return (
    <NexusAccordion open={openAcccordion} onToggleEvent={() => setAccordionOpen(!openAcccordion)} size={size}>
      <NexusAccordionTrigger>
        <h1 className="nexus-body">Accordion Title</h1>
      </NexusAccordionTrigger>
      <NexusAccordionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget aliquam justo, nec iaculis enim. Praesent at
        cursus nisl, vel molestie sapien. Donec gravida metus sem, non iaculis nisl sodales at. Cras tristique magna
        nisi, nec imperdiet lectus aliquet imperdiet. Quisque at hendrerit felis. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Etiam vitae quam et lorem tincidunt feugiat. Sed id massa
        eu ex bibendum suscipit. Praesent urna est, vestibulum vitae porttitor sed, mattis id nisi. In eu semper augue.
        Sed viverra finibus pellentesque. Etiam non ultricies mauris. Nullam eu aliquet tellus.
      </NexusAccordionContent>
    </NexusAccordion>
  );
};

AccordionComponent.defaultProps = {
  open: false,
  size: 'md'
};

export default AccordionComponent;
