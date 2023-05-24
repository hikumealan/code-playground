import React, { useState } from 'react';
import { NexusIcon, NexusTable, NexusPagination } from '@nexus/react';
import ContentSort24px from '@nexus/core/dist/assets/icons/content/ic_sort_24px.svg';
import ContentIcAdd24px from '@nexus/core/dist/assets/icons/content/ic_add_24px.svg';
import ContentIcRemove24px from '@nexus/core/dist/assets/icons/content/ic_remove_24px.svg';
import HardwareIcArrowUp24px from '@nexus/core/dist/assets/icons/hardware/ic_keyboard_arrow_up_24px.svg';
import HardwareIcArrowDown24px from '@nexus/core/dist/assets/icons/hardware/ic_keyboard_arrow_down_24px.svg';
import './table.scss';

const TableExampleComponent: React.FC = () => {
  const columnDefs = [
    {
      field: 'make',
      label: 'Automobile Make',
      isSortable: true
    },
    {
      field: 'model',
      label: 'Automobile Model',
      isSortable: true
    },
    {
      field: 'year',
      label: 'Manufactured Year',
      isSortable: true
    },
    {
      field: 'owner',
      label: 'Automobile Owner',
      isSortable: false
    },
    {
      field: 'location',
      label: 'Automobile Location'
    },
    {
      field: 'price',
      label: 'Automobile Price',
      isSortable: false,
      cellRenderer: (value: any) => `<i style="color: ${value < 46000 ? 'red' : 'green'}">
      ${
        value < 46000 ? '<nexus-icon size="xs" src="./assets/icons/alert/ic_warning_24px.svg"></nexus-icon>' : ''
      } ${value} </i>`,
      headerClass: 'text-right',
      cellClass: 'text-right'
    }
  ];

  const rowData = [
    {
      make: 'Tesla',
      model: 'Model Y',
      year: '2020',
      owner: 'Iron Man',
      location: 'PA',
      price: 35600
    },
    {
      make: 'Ford',
      model: 'F150',
      year: '2015',
      owner: 'Captain America',
      location: 'LA',
      price: 32600
    },
    {
      make: 'Porsche',
      model: 'Boxster',
      year: '2010',
      owner: 'Captain Marvel',
      location: 'PA',
      price: 72600
    },
    {
      make: 'Tesla',
      model: 'Model Y',
      year: '2015',
      owner: 'Spiderman',
      location: 'NY',
      price: 24600
    },
    {
      make: 'Ford',
      model: 'F150',
      year: '2021',
      owner: 'Black Widow',
      location: 'NY',
      price: 35600
    },
    {
      make: 'Porsche',
      model: 'Boxster',
      year: '2015',
      owner: 'Hulk',
      location: 'AK',
      price: 77500
    },
    {
      make: 'Tesla',
      model: 'Model Y',
      year: '2017',
      owner: 'Wanda',
      location: 'NJ',
      price: 24500
    },
    {
      make: 'Ford',
      model: 'F150',
      year: '2018',
      owner: 'Thor',
      location: 'MD',
      price: 22500
    },
    {
      make: 'Porsche',
      model: 'Boxster',
      year: '2015',
      owner: 'Loki',
      location: 'IL',
      price: 85500
    }
  ];
  let columnData = JSON.parse(JSON.stringify(columnDefs));
  columnData = columnData.map((col: any) => {
    col.isSortable = false;
    return col;
  });

  const pageSizeCustom = 5;
  const maxCustomPagination = Math.floor(rowData.length / pageSizeCustom) + 1;
  const isExpandedRow: any = [false, false, false, false, false];

  const [selectedRows, setSelectedRows] = useState([]);
  const [columnDefsData] = useState(columnDefs);
  const [rowListData, setRowListData] = useState(rowData.slice(0, pageSizeCustom));
  const [customRowListData, setCustomRowListData] = useState(rowData.slice(0, pageSizeCustom));
  const [expandedRow, setExpandedRow] = useState(isExpandedRow);
  const [expandedCustomRow, setExpandedCustomRow] = useState(isExpandedRow);
  const [customCurrent, setCustomCurrent] = useState(1);
  const columnList = Object.keys(rowData[0]);
  const setCustomPaginationChangeEvent = (event: any) => {
    setRowListData([]);
    setCustomCurrent(event.detail);
    const from = event.detail * pageSizeCustom - pageSizeCustom;
    const end = event.detail * pageSizeCustom;
    setRowListData(rowData.slice(from, end));
    setExpandedRow(isExpandedRow);
  };

  const onRowClick = (rowIndex: any) => {
    const temp = [...expandedRow];
    temp[rowIndex] = !temp[rowIndex];
    setExpandedRow(temp);
  };

  const onRowCustomClick = (rowIndex: any) => {
    const temp = [...expandedCustomRow];
    temp[rowIndex] = !temp[rowIndex];
    setExpandedCustomRow(temp);
  };

  const rowSelectHandler = (event: any) => {
    setSelectedRows(event?.detail);
  };

  const setChangeEvent = (_eventData: any) => {
    //Do something
  };

  const setCustomChangeEvent = (_eventData: any) => {
    setCustomRowListData([]);
    const currentPageSize = _eventData.detail.pageSize;
    const from = _eventData.detail.currentPage * currentPageSize - currentPageSize;
    const end = _eventData.detail.currentPage * currentPageSize;
    setCustomRowListData(rowData.slice(from, end));
    const tempRow = [];
    for (let i = 0; i < currentPageSize; i++) {
      tempRow.push(false);
    }
    setExpandedCustomRow(tempRow);
  };

  const getIconTemplate = (cidx: any, rowidx: any) => {
    if (cidx !== 0) {
      return '';
    }
    if (expandedRow[rowidx]) {
      return <NexusIcon src={ContentIcRemove24px}></NexusIcon>;
    }

    return <NexusIcon src={ContentIcAdd24px}></NexusIcon>;
  };

  const getIconTemplateCustom = (cidx: any, rowidx: any) => {
    if (cidx !== 0) {
      return '';
    }
    if (expandedCustomRow[rowidx]) {
      return <NexusIcon src={HardwareIcArrowUp24px}></NexusIcon>;
    }

    return <NexusIcon src={HardwareIcArrowDown24px}></NexusIcon>;
  };

  return (
    <>
      <p id="mydesc">Sample Table using Nexus-table class</p>
      <table className="nexus-table">
        <thead>
          <tr>
            <th data-testid="column-header-primary">
              Column Header <NexusIcon src={ContentSort24px}></NexusIcon>
            </th>
            <th data-testid="column-header-1">Column Header</th>
            <th data-testid="column-header-2">Column Header</th>
            <th data-testid="column-header-3">Column Header</th>
            <th data-testid="column-header-4">Column Header</th>
          </tr>
        </thead>
        <tbody>
          <tr data-testid="row-1">
            <td>Row Name</td>
            <td>000.000.00</td>
            <td>000.000.00</td>
            <td>000.000.00</td>
            <td>000.000.00</td>
          </tr>
          <tr data-testid="row-2">
            <td>Row Name</td>
            <td>000.000.00</td>
            <td>000.000.00</td>
            <td>000.000.00</td>
            <td>000.000.00</td>
          </tr>
          <tr data-testid="row-3">
            <td>Row Name</td>
            <td>000.000.00</td>
            <td>000.000.00</td>
            <td>000.000.00</td>
            <td>000.000.00</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <br />

      <p id="mydesc">Nexus Table (without Pagination & Row Select)</p>

      <NexusTable rows={rowData} columns={columnDefs}></NexusTable>

      <br />
      <br />
      <br />

      <p id="mydesc">Nexus Table (with max-height)</p>

      <NexusTable rows={rowData} columns={columnDefs} pagination={true} pageSize={5} maxHeight="200"></NexusTable>

      <br />
      <br />
      <br />

      <p id="mydesc">Nexus Table (with Pagination)</p>

      <NexusTable
        rows={rowData}
        columns={columnDefs}
        pagination={true}
        pageSize={5}
        onTableChangeEvent={(eventData: any) => setChangeEvent(eventData)}
      ></NexusTable>

      <br />
      <br />
      <br />

      <p id="mydesc">Nexus Table (with Pagination & Row Select)</p>

      <NexusTable
        rows={rowData}
        columns={columnDefs}
        pagination={true}
        pageSize={5}
        rowSelection={true}
        onRowSelect={($event: any) => rowSelectHandler($event)}
        pageSizeLabel={'Items Per Page:'}
        pageSizeOpt={[5, 10, 20]}
      ></NexusTable>

      <br />
      <br />
      <br />

      <p>Number of Selected Rows {selectedRows?.length}</p>
      <br />
      <br />
      <br />

      <p id="mydesccustom">CustomNexus Table (Custom Header, Body and Footer)</p>
      <p>
        type="custom" will have slots for thead, tbody and tfoot where developer can pass custom templates and logic.
      </p>
      <NexusTable type="custom" pagination={false} key={'customTable'}>
        <tr slot="thead">
          {columnDefsData.map((element, _index) => (
            <th>{element.label}</th>
          ))}
        </tr>
        <div slot="tbody">
          {rowListData.length > 0 &&
            rowListData.map((row: any, rowidx: number) => (
              <>
                <tr key={row.make + rowidx} className="tr-expandable" onClick={() => onRowClick(rowidx)}>
                  {Object.values(columnList).map((col: any, cidx) => (
                    <td key={col + cidx.toString()}>
                      {getIconTemplate(cidx, rowidx)}
                      {row[col]}
                    </td>
                  ))}
                </tr>
                {expandedRow[rowidx] ? (
                  <tr key={'hidden' + row.make + rowidx}>
                    {Object.values(columnList).map((col: any, cidx) => (
                      <td key={'hidden' + col + cidx.toString()}>{row[col]}</td>
                    ))}
                  </tr>
                ) : null}
              </>
            ))}
        </div>
        <NexusPagination
          className="nexus-mt-2 nexus-mb-2 nexus-ml-2"
          slot="tfoot"
          current={customCurrent}
          max={maxCustomPagination}
          onChangeEvent={(event: any) => setCustomPaginationChangeEvent(event)}
        ></NexusPagination>
      </NexusTable>

      <br />
      <br />
      <br />
      <p id="mydesc">Custom Nexus Table (with default Header and Pagination and custom Body)</p>
      <p>For default Pagination to work with custom Body content please pass totalItems prop.</p>
      <NexusTable
        type="custom"
        columns={columnData}
        pagination={true}
        pageSize={5}
        totalItems={rowData.length}
        onTableChangeEvent={(eventData: any) => setCustomChangeEvent(eventData)}
        key={'customBodyTable'}
      >
        <div slot="tbody">
          {customRowListData.length > 0 &&
            customRowListData.map((element: any, rowidx) => (
              <>
                <tr
                  key={element.model + '_custom_body'}
                  className="tr-expandable"
                  onClick={() => onRowCustomClick(rowidx)}
                >
                  {Object.values(columnList).map((ele: any, cidx) => (
                    <td key={ele + cidx.toString() + '_custom'}>
                      {getIconTemplateCustom(cidx, rowidx)}
                      {element[ele]}
                    </td>
                  ))}
                </tr>
                {expandedCustomRow[rowidx] ? (
                  <tr key={'hidden_' + element.model + '_custom'}>
                    {Object.values(columnList).map((ele: any, cidx) => (
                      <td key={'hidden_' + ele + cidx.toString()}>{element[ele]}</td>
                    ))}
                  </tr>
                ) : null}
              </>
            ))}
        </div>
      </NexusTable>
    </>
  );
};

export default TableExampleComponent;
