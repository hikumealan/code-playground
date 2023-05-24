import { useState } from 'react';
import { NexusModal, NexusModalFooter, NexusModalBody, NexusModalHeader, NexusModalHeaderSubtitle } from '@nexus/react';

interface ModalComponentProps {
  fullscreen: boolean;
  show: boolean;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const ModalComponent: React.FC<ModalComponentProps> = (props) => {
  const { fullscreen, show, size } = { ...props };
  const [showModal, setShowModal] = useState(show);

  return (
    <>
      <div className="nexus-center-xs nexus-pt-6">
        <button
          data-testid="btn-show-modal"
          className="nexus-btn-primary nexus-btn-large"
          onClick={() => setShowModal(true)}
        >
          Show modal!
        </button>
      </div>

      <NexusModal data-testid="overlay" id="modal" show={showModal} fullscreen={fullscreen} size={size}>
        <NexusModalHeader data-testid="modal-header" onCloseEvent={() => setShowModal(false)}>
          Header Content
          <NexusModalHeaderSubtitle data-testid="modal-Placeholder">Placeholder</NexusModalHeaderSubtitle>
        </NexusModalHeader>
        <NexusModalBody>
          <p data-testid="modal-body1">
            From mobility to health care to future cities, traditional industry boundaries are being disrupted, as
            sectors converge to adapt to tech and societal changes.
          </p>
          <p>
            Navigating this fast-changing environment requires agility and fresh thinking. EY is helping clients embrace
            industry disruption as an opportunity.
          </p>
        </NexusModalBody>
        <NexusModalFooter>
          <button onClick={() => setShowModal(false)} data-testid="btn-confirm" className="nexus-btn-primary">
            Confirm
          </button>
          <button onClick={() => setShowModal(false)} data-testid="btn-cancel" className="nexus-btn">
            Cancel
          </button>
        </NexusModalFooter>
      </NexusModal>
    </>
  );
};

ModalComponent.defaultProps = {
  fullscreen: false,
  show: false,
  size: 'md'
};

export default ModalComponent;
