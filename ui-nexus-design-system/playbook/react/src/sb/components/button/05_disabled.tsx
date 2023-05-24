import React from 'react';
import { disabled } from '../../constants';

const DisabledComponent: React.FC = () => {
  return (
    <div className="nexus-center-xs nexus-mt-5">
      <button className="nexus-btn nexus-btn-large nexus-btn-primary" disabled>
        {disabled.text}
      </button>
    </div>
  );
};

export default DisabledComponent;
