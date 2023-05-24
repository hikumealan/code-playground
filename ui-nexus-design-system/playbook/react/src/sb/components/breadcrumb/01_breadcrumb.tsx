import React from 'react';

import { NexusBreadcrumb, NexusBreadcrumbItem } from '@nexus/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BreadcrumbComponent: React.FC = (props) => {
  const { separator = '/' } = {...props};

  return (
    <div className="nexus-center-xs nexus-pt-6">
      <NexusBreadcrumb separator={separator}>
        <NexusBreadcrumbItem data-testid="breadcrumb-1">
          <Link to="">Breadcrumb 1</Link>
        </NexusBreadcrumbItem>
        <NexusBreadcrumbItem data-testid="breadcrumb-2">
          <Link to="">Breadcrumb 2</Link>
        </NexusBreadcrumbItem>
        <NexusBreadcrumbItem data-testid="breadcrumb-3">
          <Link to="#">Breadcrumb 3</Link>
        </NexusBreadcrumbItem>
      </NexusBreadcrumb>
    </div>
  );
};

BreadcrumbComponent.propTypes = {
  separator: PropTypes.string
}

BreadcrumbComponent.defaultProps = {
  separator: '/'
};

export default BreadcrumbComponent;
