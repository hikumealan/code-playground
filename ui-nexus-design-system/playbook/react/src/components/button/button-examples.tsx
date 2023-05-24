/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

import { NexusIcon } from '@nexus/react';
import ActionIcSettings24px from '@nexus/core/dist/assets/icons/action/ic_settings_24px.svg';

const ButtonExampleComponent: React.FC = () => (
  <>
    <p>
      <span className="nexus-h5">NOTE: </span>
      <span>
        The absence of the <strong>type</strong> attribute on a <strong>&lt;button&gt;</strong> defaults to <strong>submit
        </strong> (which will auto-submit a form on click).
      </span>
      <span>
        &nbsp; [Instead use <strong>type=&quot;button&quot;</strong> if you want to control the submit of the{' '}
        <strong>form</strong>.]
      </span>
    </p>
    <br />
    <br />

    <p className="nexus-h5">Variants</p>

    <button
      data-testid="default-button"
      className="nexus-btn">Default
    </button>
    <button
      data-testid="primary-button"
      className="nexus-btn-primary"
      style={{ margin: '0 4px' }}>Primary
    </button>
    <button
      data-testid="warn-button"
      className="nexus-btn-warn">Warn
    </button>
    <a href="#"
      data-testid="nexus-link"
      className="nexus-link"
      style={{ margin: '0 4px' }}>Link</a>

    <p className="nexus-h5">Size</p>

    <button
      data-testid="button-size-medium"
      className="nexus-btn nexus-btn-medium">Medium
    </button>
    <br />
    <br />
    <button
      data-testid="button-size-large"
      className="nexus-btn nexus-btn-large">Large
    </button>
    <br />
    <br />
    <button
      data-testid="button-size-fluid"
      className="nexus-btn nexus-btn-fluid">Fluid
    </button>

    <p className="nexus-h5">Disabled</p>

    <button
      data-testid="button-disabled"
      className="nexus-btn nexus-btn-large" disabled>Disabled
    </button>

    <p className="nexus-h5">Icon Button</p>

    <button className="nexus-btn-icon">
      <NexusIcon
        data-testid="button-icon"
        src={ActionIcSettings24px}>

      </NexusIcon>
      <span className="nexus-visually-hidden">Settings</span>
    </button>

    <p className="nexus-h5">Floating Action Button</p>

    <button
      data-testid="button-floating-action"
      className="nexus-fab">
      <NexusIcon src={ActionIcSettings24px}></NexusIcon>
      <span className="nexus-visually-hidden">Settings</span>
    </button>

    <p className="nexus-h5">Dark Theme</p>

    <div className="nexus-theme-dark" style={{ padding: '1em' }}>
      <button
        data-testid="button-theme-dark-default"
        className="nexus-btn">Default
      </button>
      <button
        data-testid="button-theme-dark-primary"
        className="nexus-btn-primary" style={{ margin: '0 4px' }}>Primary
      </button>
      <a href="#"
        data-testid="theme-dark-nexus-link"
        className="nexus-link">Link</a>
    </div>
  </>
);

export default ButtonExampleComponent;
