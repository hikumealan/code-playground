import React, { useState } from 'react';

import { NexusModal, NexusModalFooter, NexusModalBody, NexusModalHeader, NexusModalHeaderSubtitle } from '@nexus/react';

const ModalExampleComponent: React.FC = () => {
  const [show1, setShow1] = useState(false);
  const [show, setShow] = useState(false);
  const [size, setSize] = useState('md');
  const [fullscreen, setFullscreen] = useState(false);

  const showBtnHandler = (siz: string) => {
    setShow(true);
    setSize(siz);
  };

  const setFullScreen = (flag: boolean) => {
    setShow1(true);
    setFullscreen(flag);
  };

  return (
    <>
      <div className="row">
        <div className="nexus-col-md-10">
          <p className="nexus-h5">
            Modal Fullscreen: <code> true | false </code>.
          </p>
          <div className="nexus-center-xs nexus-pt-6">
            <button className="nexus-btn-primary nexus-btn-large nexus-m-1" onClick={() => setFullScreen(true)}>
              Full Screen - True
            </button>
            <button className="nexus-btn-primary nexus-btn-large nexus-m-1" onClick={() => setFullScreen(false)}>
              Full Screen - False
            </button>
          </div>

          <NexusModal data-testid="btn-show-modal" id="modal1" show={show1} fullscreen={fullscreen}>
            <NexusModalHeader data-testid="modal-header-text" onCloseEvent={() => setShow1(false)}>
              Header Content
              <NexusModalHeaderSubtitle data-testid="modal-Placeholder">Placeholder</NexusModalHeaderSubtitle>
            </NexusModalHeader>
            <NexusModalBody>
              <p data-testid="modal-body">
                From mobility to health care to future cities, traditional industry boundaries are being disrupted, as
                sectors converge to adapt to tech and societal changes.
              </p>
              <p>
                Navigating this fast-changing environment requires agility and fresh thinking. EY is helping clients
                embrace industry disruption as an opportunity.
              </p>
            </NexusModalBody>
            <NexusModalFooter>
              <button data-testid="btn-confirm" onClick={() => setShow1(false)} className="nexus-btn-primary">
                Confirm
              </button>
              <button data-testid="btn-cancel" onClick={() => setShow1(false)} className="nexus-btn">
                Cancel
              </button>
            </NexusModalFooter>
          </NexusModal>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="nexus-col-md-10">
          <p className="nexus-h5">
            Modal Size: <code>xs | sm | md | lg | xl | full</code>.
          </p>
          <div className="nexus-center-xs nexus-pt-6">
            <button
              data-testid="modal-size-default"
              className="nexus-btn-primary nexus-btn-large nexus-m-1"
              onClick={() => showBtnHandler('')}
            >
              Show modal - Default
            </button>
            <button
              data-testid="modal-size-xs"
              className="nexus-btn-primary nexus-btn-large nexus-m-1"
              onClick={() => showBtnHandler('xs')}
            >
              Show modal - xs
            </button>
            <button
              data-testid="modal-size-sm"
              className="nexus-btn-primary nexus-btn-large nexus-m-1"
              onClick={() => showBtnHandler('sm')}
            >
              Show modal - sm
            </button>
            <button
              data-testid="modal-size-md"
              className="nexus-btn-primary nexus-btn-large nexus-m-1"
              onClick={() => showBtnHandler('md')}
            >
              Show modal - md
            </button>
            <button
              data-testid="modal-size-lg"
              className="nexus-btn-primary nexus-btn-large nexus-m-1"
              onClick={() => showBtnHandler('lg')}
            >
              Show modal - lg
            </button>
            <button
              data-testid="modal-size-xl"
              className="nexus-btn-primary nexus-btn-large nexus-m-1"
              onClick={() => showBtnHandler('xl')}
            >
              Show modal - xl
            </button>
            <button
              data-testid="modal-size-full"
              className="nexus-btn-primary nexus-btn-large nexus-m-1"
              onClick={() => showBtnHandler('full')}
            >
              Show modal - full
            </button>
          </div>

          <NexusModal id="modal" show={show} size={'full'}>
            <NexusModalHeader data-testid="modal-size-header" onCloseEvent={() => setShow(false)}>
              Header Content
              <NexusModalHeaderSubtitle data-testid="modal-size-Placeholder">Placeholder</NexusModalHeaderSubtitle>
            </NexusModalHeader>
            <NexusModalBody>
              <p>
                Current modal size is <strong>{size}</strong>
              </p>
              <p data-testid="modal-size-body">
                From mobility to health care to future cities, traditional industry boundaries are being disrupted, as
                sectors converge to adapt to tech and societal changes.
              </p>
              <p>
                Navigating this fast-changing environment requires agility and fresh thinking. EY is helping clients
                embrace industry disruption as an opportunity.
              </p>
            </NexusModalBody>
            <NexusModalFooter>
              <button data-testid="modal-size-btn-confirm" onClick={() => setShow(false)} className="nexus-btn-primary">
                Confirm
              </button>
              <button data-testid="modal-size-btn-cancel" onClick={() => setShow(false)} className="nexus-btn">
                Cancel
              </button>
            </NexusModalFooter>
          </NexusModal>
        </div>
      </div>
      <br />
    </>
  );
};

export default ModalExampleComponent;
