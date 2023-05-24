import React, { useState } from 'react';

import { NexusIcon, NexusInput, NexusSearch, NexusSearchList, NexusSearchListItem,NexusTable } from '@nexus/react';

import ActionIcSearch24px from '@nexus/core/dist/assets/icons/action/ic_search_24px.svg';

const SearchExampleComponent: React.FC = () => {
  const items = [{ name: 'Ford' },  { name: 'Porsche' },{ name: 'Tesla' }];

  const [filtereditem, setFiltereditem] = useState(items);
  const Performfilter = (e: any) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = items.filter((item) => item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
      setFiltereditem(results);
    } else {
      setFiltereditem([...items]);
    }
  };
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

  let rowData = [
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
    }
  ];
  let columnData = JSON.parse(JSON.stringify(columnDefs));
  columnData = columnData.map((col: any) => {
    col.isSortable = false;
    return col;
  });
  const [customRowListData, setCustomRowListData] = useState(rowData.slice(0, 5));
  const columnList = Object.keys(rowData[0]);
  const RefreshTable = (e: any) => {
    let rowDataNew =[];
    const newLocal = document.querySelector('input') as HTMLInputElement;
   const selectedItem= newLocal.value;
    if(selectedItem!==null && selectedItem !==undefined && selectedItem!=='')
    {

    rowDataNew =  rowData.filter(function(newValue) {
      return newValue.make === selectedItem;
    }); 
  }
  else
  {
    rowDataNew=rowData;
  }
  rowData=rowDataNew;

    setCustomRowListData(rowData);


}
  return (
    <>
    <NexusSearch >
      <NexusInput data-testid="search-bar" onKeyUp={Performfilter} autocomplete="off" placeholder="Search">
        <NexusIcon data-testid="search-icon" onClick={RefreshTable} src={ActionIcSearch24px}></NexusIcon>
      </NexusInput>
      <NexusSearchList onClick={RefreshTable}>
        <div>
          {filtereditem.length > 0 && (
            <div>
              {filtereditem.map((item) => (
                <NexusSearchListItem data-testid="search-list" key={item.name}>
                  <button>{item.name}</button>
                </NexusSearchListItem>
              ))}
            </div>
          )}
        </div>
      </NexusSearchList>
    </NexusSearch>
    <br />
    <NexusTable
        type="custom"
        id="tblNexus"
        columns={columnData}
        pagination={true}
        pageSize={5}
        totalItems={rowData.length}
      >
              <div slot="tbody">
          {customRowListData.length > 0 &&
            customRowListData.map((element: any, rowidx) => (
              <>
                <tr

                >
                  {Object.values(columnList).map((ele: any, cidx) => (
                    <td>

                      {element[ele]}
                    </td>
                  ))}
                </tr>
              </>
            ))}
        </div>
        </NexusTable>
    </>
  );
};


export default SearchExampleComponent;