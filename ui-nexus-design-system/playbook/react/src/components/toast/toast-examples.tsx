import React, { useState } from 'react';
import infoIcon from '@nexus/core/dist/assets/icons/content/ic_sort_24px.svg';
import { NexusToast } from '@nexus/react';

const ToastExampleComponent: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <p className="nexus-h5">Dynamic Toast</p>
      <button
        data-testid="btn-trigger-toast"
        className="nexus-btn-primary nexus-btn-large nexus-rhythm-4" onClick={() => setShow(true)}>Trigger toast</button>
      {show && <NexusToast
        data-testid="btn-trigger-toast-info"
        closeable={true} onCloseEvent={() => setShow(false)}>Information message.</NexusToast>}

      <NexusToast
        data-testid="float-top-toast"
        className="nexus-rhythm-2" variant="info" position="top">Float at the top of the page.</NexusToast>

      <NexusToast
        data-testid="float-bottom-toast"
        className="nexus-rhythm-2" variant="info" position="bottom">Float at the bottom of the page.</NexusToast>

      <NexusToast
        data-testid="disappear-toast"
        class="nexus-rhythm-2" variant="custom" icon-src={infoIcon}
        auto-close={5000}>Test
        This message will disappear in 5 sec.
      </NexusToast>
    </>
  );
};

export default ToastExampleComponent;
