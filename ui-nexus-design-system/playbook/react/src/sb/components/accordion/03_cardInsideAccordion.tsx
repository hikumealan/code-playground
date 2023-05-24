import { NexusAccordion, NexusAccordionContent, NexusAccordionTrigger, NexusCard, NexusCardAvatar, NexusCardHeader, NexusCardHeaderButton, NexusCardHeaderDetails, NexusCardHeaderSubtitle, NexusCardHeaderTitle } from "@nexus/react";
import React, { useState } from "react";
import { cardInsideAccordion } from "../../constants";


const CardInsideAccordionComponent: React.FC = () => {
    const [openAcccordion, setAccordionOpen] = useState(false);

return(
    <NexusAccordion open={openAcccordion} onToggleEvent={() => setAccordionOpen(!openAcccordion)} size="md">
    <NexusAccordionTrigger>
      <h1 className="nexus-body">{cardInsideAccordion.show}</h1>
    </NexusAccordionTrigger>
    <NexusAccordionContent>

    <NexusCard bgColor="bgColor" height="height">
            <NexusCardAvatar>
                <img src={cardInsideAccordion.avatar} alt={cardInsideAccordion.name} />
            </NexusCardAvatar>
            <NexusCardHeader>
                <NexusCardHeaderTitle>{cardInsideAccordion.name}</NexusCardHeaderTitle>
                <NexusCardHeaderSubtitle>{cardInsideAccordion.profession}</NexusCardHeaderSubtitle>
                <NexusCardHeaderSubtitle>{cardInsideAccordion.education}</NexusCardHeaderSubtitle>
                <NexusCardHeaderDetails>{cardInsideAccordion.lastLogin}</NexusCardHeaderDetails>
                <NexusCardHeaderButton style={{display: "block"}}>
                    <div className="nexus-row" style={{marginBottom: "5px"}}>
                        <button className=" nexus-btn-primary nexus-btn-medium">{cardInsideAccordion.viewProfile}</button>
                    </div>
                    <div className="nexus-row">
                        <button className="nexus-btn nexus-btn-medium">{cardInsideAccordion.contactUser}</button>
                    </div>
                </NexusCardHeaderButton>
            </NexusCardHeader>
        </NexusCard>

    </NexusAccordionContent>
  </NexusAccordion>
)

}

export default CardInsideAccordionComponent;