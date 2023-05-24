import React from 'react';
import { NexusBreadcrumb, NexusBreadcrumbItem } from '@nexus/react';
import { Link } from 'react-router-dom';

const DisabledComponent: React.FC = () => (
    <div className="nexus-center-xs nexus-pt-6">
        <NexusBreadcrumb>
            <NexusBreadcrumbItem data-testid="disabled-breadcrumb-1" disabled>
                <Link to="#">Breadcrumb 1</Link>
            </NexusBreadcrumbItem>
            <NexusBreadcrumbItem data-testid="disabled-breadcrumb-2" disabled>
                <Link to="#">Breadcrumb 2</Link>
            </NexusBreadcrumbItem>
            <NexusBreadcrumbItem data-testid="disabled-breadcrumb-3" disabled>
                <Link to="#">Breadcrumb 3</Link>
            </NexusBreadcrumbItem>
        </NexusBreadcrumb>
    </div>
);

export default DisabledComponent;
