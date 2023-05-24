import React from 'react';
import PropTypes from 'prop-types';
import { columnDefs, rowData} from '../../constants';
import { NexusTable } from '@nexus/react';
import ContentSortAsc24px from '@nexus/core/dist/assets/icons/navigation/ic_arrow_upward_24px.svg';
import Default24px from '@nexus/core/dist/assets/icons/content/ic_sort_24px.svg';
import ContentSortDes24px from '@nexus/core/dist/assets/icons/navigation/ic_arrow_downward_24px.svg';


const TableComponent: React.FC = (props) => {
  const {
    currentPage = 1,
    maxHeight = '',
    pageSize = 5,
    pageSizeLabel ='Items Per Page:',
    pagination = true,
    rowSelection = false,
    type = 'basic',
  } = { ...props };

  return (
    <>
      <NexusTable
        currentPage={currentPage}
        maxHeight={maxHeight}
        type={type}
        sortAscIcon={ContentSortAsc24px}
        sortDefaultIcon={Default24px}
        sortDescIcon={ContentSortDes24px}
        rows={rowData}
        columns={columnDefs}
        pagination={pagination}
        pageSize={pageSize}
        rowSelection={rowSelection}
        pageSizeLabel={pageSizeLabel}
        pageSizeOpt={[5, 10, 20]}
      ></NexusTable>
    </>
  );
};

TableComponent.defaultProps = {
  currentPage: PropTypes.number,
  maxHeight: PropTypes.string,
  pagination: PropTypes.bool,
  pageSize: PropTypes.number,
  pageSizeLabel: PropTypes.string,
  rowSelection: PropTypes.bool,
  type: PropTypes.string
};

export default TableComponent;
