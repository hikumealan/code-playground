import React from 'react';
import { NexusTable } from '@nexus/react';
import './table.scss';
import ContentSortAsc24px from '@nexus/core/dist/assets/icons/navigation/ic_arrow_upward_24px.svg';
import Default24px from '@nexus/core/dist/assets/icons/content/ic_sort_24px.svg';
import ContentSortDes24px from '@nexus/core/dist/assets/icons/navigation/ic_arrow_downward_24px.svg';

interface TableComponentProps {
  currentPage: number;
  maxHeight: string;
  pagination: boolean;
  pageSize: number;
  pageSizeLabel: string;
  rowSelection: boolean;
  type: 'basic';
  sortAscIcon: string;
  sortDefaultIcon: string;
  sortDesIcon: string;
}

const TableComponent: React.FC<TableComponentProps> = (props) => {
  const {
    currentPage,
    maxHeight,
    pageSize,
    pageSizeLabel,
    pagination,
    rowSelection,
    type,
    sortAscIcon,
    sortDefaultIcon,
    sortDesIcon
  } = { ...props };
  const columnDefs = [
    {
      field: 'make',
      label: 'Car Make',
      isSortable: true,
      sortAscending: (firstValue: any, secondValue: any, sortField: string) =>
        firstValue[sortField] > secondValue[sortField] ? 1 : -1
    },
    {
      field: 'model',
      label: 'Automobile Model',
      isSortable: false,
      headerClass: 'cls-col-width',
      cellClass: 'cls-col-width'
    },
    {
      field: 'year',
      label: 'Automobile Manufactured Year',
      isSortable: true
    },
    {
      field: 'owner',
      label: 'Automobile Owner',
      isSortable: true
    },
    {
      field: 'location',
      label: 'Automobile Location',
      isSortable: false
    },
    {
      field: 'price',
      label: 'Automobile Sale Price',
      isSortable: false,
      cellRenderer: (value: any) => `<i style="color: ${value < 32000 ? 'red' : 'green'}">
      ${
        value < 32000 ? '<nexus-icon size="xs" src="./assets/icons/alert/ic_warning_24px.svg"></nexus-icon>' : ''
      } ${value} </i>`,
      headerClass: 'text-right',
      cellClass: 'text-right'
    }
  ];
  const rowData = [
    {
      make: 'Ford',
      model: 'Mondeo',
      year: '2022',
      price: 32500,
      owner: 'Captain America',
      location: 'LA'
    },
    {
      make: 'Toyota',
      model: 'Celica',
      year: '2020',
      price: 35500,
      owner: 'Iron Man',
      location: 'PA'
    },
    {
      make: 'Toyota',
      model: 'Celica',
      year: '2015',
      price: 24500,
      owner: 'Spiderman',
      location: 'NY'
    },
    {
      make: 'Porsche',
      model: 'Boxster',
      year: '2010',
      price: 62000,
      owner: 'Captain Marvel',
      location: 'PA'
    },
    {
      make: 'Ford',
      model: 'Mondeo',
      year: '2021',
      price: 31500,
      owner: 'Black Widow',
      location: 'NY'
    },
    {
      make: 'Toyota',
      model: 'Celica',
      year: '2017',
      price: 23000,
      owner: 'Wanda',
      location: 'NJ'
    },
    {
      make: 'Porsche',
      model: 'Boxster',
      year: '2015',
      price: 70500,
      owner: 'Hulk',
      location: 'AK'
    },
    {
      make: 'Porsche',
      model: 'Boxster',
      year: '2022',
      price: 92500,
      owner: 'Loki',
      location: 'IL'
    },
    {
      make: 'Ford',
      model: 'Mondeo',
      year: '2018',
      price: 26500,
      owner: 'Thor',
      location: 'MD'
    },
    {
      make: 'Porsche',
      model: 'Boxster',
      year: '2012',
      price: 15000,
      owner: 'Dr. Strange',
      location: 'NY'
    },
    {
      make: 'Ford',
      model: 'Mondeo',
      year: '2010',
      price: 23500,
      owner: 'Thanos',
      location: 'TX'
    }
  ];

  return (
    <>
      <NexusTable
        currentPage={currentPage}
        maxHeight={maxHeight}
        type={type}
        sortAscIcon={sortAscIcon}
        sortDefaultIcon={sortDefaultIcon}
        sortDescIcon={sortDesIcon}
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
  currentPage: 1,
  maxHeight: '',
  pagination: true,
  pageSize: 5,
  pageSizeLabel: 'Items Per Page:',
  rowSelection: false,
  type: 'basic',
  sortAscIcon: ContentSortAsc24px,
  sortDefaultIcon: Default24px,
  sortDesIcon: ContentSortDes24px
};

export default TableComponent;
