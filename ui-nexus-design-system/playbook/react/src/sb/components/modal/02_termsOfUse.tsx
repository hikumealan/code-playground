import React, { useState } from 'react';
import { termsOfUse } from '../../constants';
import {
  NexusModal,
  NexusModalFooter,
  NexusModalBody,
  NexusModalHeader,
  NexusModalHeaderSubtitle,
  NexusNotification,
  NexusCheckbox
 } from '@nexus/react';


const ModalEventHandlerComponent: React.FC = (props) => {
  const { fullscreen = false, show = false } = { ...props };
  const [showModal, setShowModal] = useState(show);
  const [isTermsAccepted, setTermsAccepted] = useState(false);


  return (
    <>
      <div className="nexus-center-xs nexus-pt-6">
        <button
          data-testid="btn-show-modal"
          className="nexus-btn-primary nexus-btn-large"
          onClick={() => setShowModal(true)}
        >
          {termsOfUse.acceptTermsAndConditions}
        </button>
      </div>

      {isTermsAccepted ?
        <NexusNotification variant='success'>{termsOfUse.notificationSuccess}</NexusNotification>:
        <NexusNotification variant='error'>{termsOfUse.notificationFailure}</NexusNotification>
      }

      <NexusModal data-testid="overlay" id="modal" show={showModal} fullscreen={fullscreen} size='md' onCloseEvent = {() => console.log("Triggered close of modal.")}>
        <NexusModalHeader data-testid="modal-header" onCloseEvent={() => setShowModal(false)}>
          {termsOfUse.title}
          <NexusModalHeaderSubtitle data-testid="modal-Placeholder">{termsOfUse.subTitle}</NexusModalHeaderSubtitle>
        </NexusModalHeader>
        <NexusModalBody>
              <h4 className='nexus-h4'>{termsOfUse.agreement}</h4>
              <div dangerouslySetInnerHTML={{ __html: termsOfUse.details }}></div>

              <NexusCheckbox checked={isTermsAccepted} onInput={() => setTermsAccepted(!isTermsAccepted)}>{termsOfUse.checkBoxText}</NexusCheckbox>
        </NexusModalBody>
        <NexusModalFooter>
          <button onClick={() => setShowModal(false)} data-testid="btn-confirm" className="nexus-btn-primary">
            {termsOfUse.submit}
          </button>
          <button onClick={() => setShowModal(false)} data-testid="btn-cancel" className="nexus-btn">
            {termsOfUse.cancel}
          </button>
        </NexusModalFooter>
      </NexusModal>
    </>
  );
};

export default ModalEventHandlerComponent;
