import React from 'react';
import { NexusBreadcrumb, NexusBreadcrumbItem, NexusIcon } from '@nexus/react';

import ActionIc3dRotation24px from '@nexus/core/dist/assets/icons/action/ic_3d_rotation_24px.svg';
import ActionIcSetting24px from '@nexus/core/dist/assets/icons/action/ic_settings_24px.svg';
import ActionIcAccountBalance24px from '@nexus/core/dist/assets/icons/action/ic_account_balance_24px.svg';

const BreadCrumbWithIconComponent: React.FC = () => (
  <div className="nexus-center-xs nexus-pt-6">
    <NexusBreadcrumb>
      <NexusBreadcrumbItem data-testid="breadcrumb-with-icons-1">
        <NexusIcon src={ActionIc3dRotation24px} />
        Dimension
      </NexusBreadcrumbItem>
      <NexusBreadcrumbItem data-testid="breadcrumb-with-icons-2">
        <NexusIcon src={ActionIcSetting24px} />
        Settings
      </NexusBreadcrumbItem>
      <NexusBreadcrumbItem data-testid="breadcrumb-with-icons-3">
        <NexusIcon src={ActionIcAccountBalance24px} />
        Build
      </NexusBreadcrumbItem>
    </NexusBreadcrumb>
  </div>
);

export default BreadCrumbWithIconComponent;
