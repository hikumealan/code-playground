import React, { useState } from 'react';

import { NexusPagination } from '@nexus/react';
import { NexusPaginationCustomEvent } from '@nexus/core';

interface PaginationComponentProps {
  current: number;
  max: number;
}

const PaginationComponent: React.FC<PaginationComponentProps> = (props) => {
  const { current, max } = { ...props };
  const [currentPage, setCurrentPage] = useState(current);

  return (
    <NexusPagination
      data-testid="pagination"
      current={currentPage}
      max={max}
      onChangeEvent={(event: NexusPaginationCustomEvent<any>) => setCurrentPage(event.detail)}
    ></NexusPagination>
  );
};

PaginationComponent.defaultProps = {
  current: 3,
  max: 5
};

export default PaginationComponent;
