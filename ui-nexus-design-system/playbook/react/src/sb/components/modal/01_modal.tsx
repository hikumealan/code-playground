import { useState } from 'react';
import { defaultModal } from '../../constants';
import PropTypes from 'prop-types';
import { NexusModal, NexusModalFooter, NexusModalBody, NexusModalHeader, NexusModalHeaderSubtitle, NexusFormField, NexusLabel, NexusInput } from '@nexus/react';


const ModalComponent: React.FC = (props) => {
  const { fullscreen = false, show = false, size = "md" } = { ...props };
  const [showModal, setShowModal] = useState(show);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <div className="nexus-center-xs nexus-pt-6">
        <button
          data-testid="btn-show-modal"
          className="nexus-btn-primary nexus-btn-large"
          onClick={() => setShowModal(true)}
        >
          Show Modal
        </button>
      </div>

      <NexusModal data-testid="overlay" id="modal" show={showModal} fullscreen={fullscreen} size={size}>
        <NexusModalHeader data-testid="modal-header" onCloseEvent={() => setShowModal(false)}>
          Nexus
          <NexusModalHeaderSubtitle data-testid="modal-Placeholder">{defaultModal.header}</NexusModalHeaderSubtitle>
        </NexusModalHeader>
        <NexusModalBody>
          <NexusFormField>

            <NexusLabel data-testid="label-first-name">{defaultModal.usernameText}</NexusLabel>
            <NexusInput
              {...props}
              data-testid="input-text-box"
              placeholder={defaultModal.name}
              value={username}
              onInput={(event: any) => setUserName(event.target.value)}
            ></NexusInput>
            <NexusLabel data-testid="label-first-name">{defaultModal.emailText}</NexusLabel>
            <NexusInput
              {...props}
              data-testid="input-text-box"
              placeholder={defaultModal.emailAddress}
              value={email}
              onInput={(event: any) => setEmail(event.target.value)}
            ></NexusInput>
            <NexusLabel data-testid="label-first-name">{defaultModal.passwordText}</NexusLabel>
            <NexusInput
              {...props}
              data-testid="input-text-box"
              type={"password"}
              value={password}
              onInput={(event: any) => setPassword(event.target.value)}
            ></NexusInput>
          </NexusFormField>
        </NexusModalBody>
        <NexusModalFooter>
          <button onClick={() => setShowModal(false)} data-testid="btn-confirm" className="nexus-btn-primary">
            {defaultModal.confirm}
          </button>
          <button onClick={() => setShowModal(false)} data-testid="btn-cancel" className="nexus-btn">
            {defaultModal.cancel}
          </button>
        </NexusModalFooter>
      </NexusModal>
    </>
  );
};

ModalComponent.propTypes = {
  fullscreen: PropTypes.bool,
  show: PropTypes.bool,
  size: PropTypes.string
};

export default ModalComponent;
