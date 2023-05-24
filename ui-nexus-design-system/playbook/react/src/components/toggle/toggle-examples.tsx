import React from 'react';

import { NexusToggle } from '@nexus/react';

const ToggleExampleComponent: React.FC = () => {
  return (
    <>
      <p className="nexus-h5">Disabled</p>
      <NexusToggle data-testid="toggle-disabled" disabled />

      <p className="nexus-h5">Add Labels</p>
      <NexusToggle data-testid="toggle-labels" labelActive="show" labelInactive="hide" size="sm" />

      <p className="nexus-h5">Toggle Types:</p>

      <p className="nexus-h6">Default</p>
      <NexusToggle data-testid="toggle-default" labelInactive="hide" labelActive="show" size="sm"></NexusToggle>

      <p className="nexus-h5">Button</p>
      <NexusToggle data-testid="toggle-button" type="button" labelInactive="hide" labelActive="show" size="sm"></NexusToggle>

      <p className="nexus-h5">Toggle switch size variants.</p>
      <div className="nexus-row">
        <div className="nexus-col-lg-1">
          <p className="nexus-h6">xs</p>
          <NexusToggle data-testid="toggle-size-xs" size="xs" />
        </div>
        <div className="nexus-col-lg-1">
          <p className="nexus-h6">sm</p>
          <NexusToggle data-testid="toggle-size-sm" size="sm" />
        </div>
        <div className="nexus-col-lg-2">
          <p className="nexus-h6">md</p>
          <NexusToggle data-testid="toggle-size-md" size="md" />
        </div>
        <div className="nexus-col-lg-2">
          <p className="nexus-h6">lg</p>
          <NexusToggle data-testid="toggle-size-lg" size="lg" />
        </div>
        <div className="nexus-col-lg-2">
          <p className="nexus-h6">xl</p>
          <NexusToggle data-testid="toggle-size-xl" size="xl" />
        </div>
      </div>

      <p className="nexus-h5">Toggle button size variants.</p>
      <div className="nexus-row">
        <div className="nexus-col-lg-2">
          <p className="nexus-h6">xs</p>
          <NexusToggle data-testid="toggle-btn-size-xs" type="button" label-inactive="hide" label-active="show" size="xs" />
        </div>
        <div className="nexus-col-lg-2">
          <p className="nexus-h6">sm</p>
          <NexusToggle data-testid="toggle-btn-size-sm" type="button" label-inactive="hide" label-active="show" size="sm" />
        </div>
        <div className="nexus-col-lg-2">
          <p className="nexus-h6">md</p>
          <NexusToggle data-testid="toggle-btn-size-md" type="button" label-inactive="hide" label-active="show" size="md" />
        </div>
        <div className="nexus-col-lg-2">
          <p className="nexus-h6">lg</p>
          <NexusToggle data-testid="toggle-btn-size-lg" type="button" label-inactive="hide" label-active="show" size="lg" />
        </div>
        <div className="nexus-col-lg-2">
          <p className="nexus-h6">xl</p>
          <NexusToggle data-testid="toggle-btn-size-xl" type="button" label-inactive="hide" label-active="show" size="xl" />
        </div>
      </div>
    </>
  );
};

export default ToggleExampleComponent;
