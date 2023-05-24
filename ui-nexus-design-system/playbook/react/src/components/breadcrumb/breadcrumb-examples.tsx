import React from 'react';
import { Link } from 'react-router-dom';
import { NexusBreadcrumb, NexusBreadcrumbItem, NexusIcon } from '@nexus/react';

import ActionIc3dRotation24px from '@nexus/core/dist/assets/icons/action/ic_3d_rotation_24px.svg';
import ActionIcSetting24px from '@nexus/core/dist/assets/icons/action/ic_settings_24px.svg';
import ActionIcAccountBalance24px from '@nexus/core/dist/assets/icons/action/ic_account_balance_24px.svg';

const BreadcrumbExampleComponent: React.FC = () => (
  <>
    <p className="nexus-h5">Custom Content</p>

    <p className="nexus-h6">Breadcrumb Separators</p>
    <p>Default</p>
    <NexusBreadcrumb>
      <NexusBreadcrumbItem data-testid="default-breadcrumb-1">
        <Link to="">Breadcrumb 1</Link>
      </NexusBreadcrumbItem>
      <NexusBreadcrumbItem data-testid="default-breadcrumb-2">
        <Link to="">Breadcrumb 2</Link>
      </NexusBreadcrumbItem>
      <NexusBreadcrumbItem data-testid="default-breadcrumb-3">
        <Link to="">Breadcrumb 3</Link>
      </NexusBreadcrumbItem>
    </NexusBreadcrumb>

    <p>Backward Slash: \</p>
    <NexusBreadcrumb separator="\">
      <NexusBreadcrumbItem data-testid="back-slash-breadcrumb-1">
        <Link to="">Breadcrumb 1</Link>
      </NexusBreadcrumbItem>
      <NexusBreadcrumbItem data-testid="back-slash-breadcrumb-2">
        <Link to="">Breadcrumb 2</Link>
      </NexusBreadcrumbItem>
      <NexusBreadcrumbItem data-testid="back-slash-breadcrumb-3">
        <Link to="">Breadcrumb 3</Link>
      </NexusBreadcrumbItem>
    </NexusBreadcrumb>

    <p>Greaterthan: &gt;</p>
    <NexusBreadcrumb separator=">">
      <NexusBreadcrumbItem data-testid="greater-than-breadcrumb-1">
        <Link to="">Breadcrumb 1</Link>
      </NexusBreadcrumbItem>
      <NexusBreadcrumbItem data-testid="greater-than-breadcrumb-2">
        <Link to="">Breadcrumb 2</Link>
      </NexusBreadcrumbItem>
      <NexusBreadcrumbItem data-testid="greater-than-breadcrumb-3">
        <Link to="">Breadcrumb 3</Link>
      </NexusBreadcrumbItem>
    </NexusBreadcrumb>

    <p className="nexus-h6">Breadcrumb with Icons</p>
    <NexusBreadcrumb>
      <NexusBreadcrumbItem data-testid="breadcrumb-with-icons-1">
        <NexusIcon src={ActionIc3dRotation24px} />
        Breadcrumb 1
      </NexusBreadcrumbItem>
      <NexusBreadcrumbItem data-testid="breadcrumb-with-icons-2">
        <NexusIcon src={ActionIcSetting24px} />
        Breadcrumb 2
      </NexusBreadcrumbItem>
      <NexusBreadcrumbItem data-testid="breadcrumb-with-icons-3">
        <NexusIcon src={ActionIcAccountBalance24px} />
        Breadcrumb 3
      </NexusBreadcrumbItem>
    </NexusBreadcrumb>

    <p className="nexus-h6">BreadcrumbItem disabled </p>
    <NexusBreadcrumb>
      <NexusBreadcrumbItem data-testid="disabled-breadcrumb-1" disabled>
        <Link to="" target="_blank">
          Breadcrumb 1
        </Link>
      </NexusBreadcrumbItem>
      <NexusBreadcrumbItem data-testid="disabled-breadcrumb-2">
        <Link to="">Breadcrumb 2</Link>
      </NexusBreadcrumbItem>
      <NexusBreadcrumbItem data-testid="disabled-breadcrumb-3">
        <Link to="">Breadcrumb 3</Link>
      </NexusBreadcrumbItem>
    </NexusBreadcrumb>
  </>
);

export default BreadcrumbExampleComponent;
