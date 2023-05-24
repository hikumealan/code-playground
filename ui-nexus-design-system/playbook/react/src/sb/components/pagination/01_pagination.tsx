import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NexusPagination } from '@nexus/react';
import { NexusPaginationCustomEvent } from '@nexus/core';
import { pagination } from '../../constants';


const PaginationComponent: React.FC = (props) => {
  const { current = pagination.current, max = pagination.max } = { ...props };
  const [currentPage, setCurrentPage] = useState(current);

  return (
    <>
      <NexusPagination
        data-testid="nexus-pagination"
        current={currentPage}
        max={max}
        onChangeEvent={(event: NexusPaginationCustomEvent<any>) => setCurrentPage(event.detail)}
      ></NexusPagination>
    </>
  );
};

PaginationComponent.propTypes = {
  current: PropTypes.number,
  max: PropTypes.number
};

export default PaginationComponent;
