import React from 'react';

import { Link } from 'react-router-dom';
import { NexusBreadcrumb, NexusBreadcrumbItem } from '@nexus/react';

interface BreadCrumbComponentProps {
  separator: string;
}

const BreadcrumbComponent: React.FC<BreadCrumbComponentProps> = (props) => {
  const { separator } = props;

  return (
    <>
      <NexusBreadcrumb separator={separator}>
        <NexusBreadcrumbItem data-testid="breadcrumb-1">
          <Link to="">Breadcrumb 1</Link>
        </NexusBreadcrumbItem>
        <NexusBreadcrumbItem data-testid="breadcrumb-2">
          <Link to="">Breadcrumb 2</Link>
        </NexusBreadcrumbItem>
        <NexusBreadcrumbItem data-testid="breadcrumb-3">
          <Link to="">Breadcrumb 3</Link>
        </NexusBreadcrumbItem>
      </NexusBreadcrumb>
    </>
  );
};

BreadcrumbComponent.defaultProps = {
  separator: '/'
};

export default BreadcrumbComponent;
