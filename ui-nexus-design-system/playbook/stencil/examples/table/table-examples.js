const tableData = [
  {
    make: 'Volvo',
    model: 'XC60',
    year: '2020',
    owner: 'Iron Man',
    location: 'PA',
    price: 35300
  },
  {
    make: 'GMC',
    model: 'HUMMER',
    year: '2022',
    owner: 'Captain America',
    location: 'LA',
    price: 32300
  },
  {
    make: 'Honda',
    model: 'Accord',
    year: '2010',
    owner: 'Captain Marvel',
    location: 'PA',
    price: 72300
  },
  {
    make: 'Volvo',
    model: 'XC60',
    year: '2015',
    owner: 'Spiderman',
    location: 'NY',
    price: 24300
  },
  {
    make: 'GMC',
    model: 'HUMMER',
    year: '2021',
    owner: 'Black Widow',
    location: 'NY',
    price: 30300
  },
  {
    make: 'Honda',
    model: 'Accord',
    year: '2015',
    owner: 'Hulk',
    location: 'AK',
    price: 90300
  },
  {
    make: 'Volvo',
    model: 'XC60',
    year: '2017',
    owner: 'Wanda',
    location: 'NJ',
    price: 29300
  },
  {
    make: 'GMC',
    model: 'HUMMER',
    year: '2018',
    owner: 'Thor',
    location: 'MD',
    price: 27300
  },
  {
    make: 'Honda',
    model: 'Accord',
    year: '2022',
    owner: 'Loki',
    location: 'IL',
    price: 103000
  },
  {
    make: 'GMC',
    model: 'HUMMER',
    year: '2010',
    owner: 'Thanos',
    location: 'TX',
    price: 25300
  },
  {
    make: 'Honda',
    model: 'Accord',
    year: '2012',
    owner: 'Dr. Strange',
    location: 'NY',
    price: 15300
  }
];
const exColumnDefs = [
  {
    field: 'make',
    label: 'Make',
    isSortable: false
  },
  {
    field: 'model',
    label: 'Model',
    isSortable: false
  },
  {
    field: 'year',
    label: 'Year'
  },
  {
    field: 'owner',
    label: 'Owner',
    isSortable: true
  },
  {
    field: 'location',
    label: 'Location',
    isSortable: false
  },
  {
    field: 'price',
    label: 'Price',
    isSortable: false,
    cellRenderer: (value) => `<i style="color: ${value < 50000 ? 'red' : 'green'}">
      ${
  value < 50000 ? '<nexus-icon size="xs" src="./assets/icons/alert/ic_warning_24px.svg"></nexus-icon>' : ''
} ${value} </i>`,
    headerClass: 'text-right',
    cellClass: 'text-right'
  }
];

const columnList = Object.keys(tableData[0]);

const onRowClicked = (row, index) => {
  const hiddenId = 'tr_' + index + '_' + row.getElementsByTagName('td')[0].innerText;
  const icon = row.querySelector('nexus-icon');
  if(icon.classList.contains('expandable-icon')) {
    icon.setAttribute('src', './assets/icons/content/ic_remove_24px.svg')
  } else {
    icon.setAttribute('src', './assets/icons/content/ic_add_24px.svg')
  }
  icon.classList.toggle('expandable-icon');
  const hidderRow = document.getElementById(hiddenId);
  hidderRow && hidderRow.classList.toggle('tr-hidden');
}

const generateCustomHeader = () => {
  const table = document.getElementById('table5_table');
  const tHead = table && table.getElementsByTagName('thead')[0];
  if (tHead) {
    const row = tHead.insertRow(0);
    exColumnDefs.forEach((key) => {
      const th = document.createElement("th");
      th.innerHTML = key.label
      row.appendChild(th);
      if (key.isSortable) {
        th.addEventListener('click', () => {
          //do something or call custom sorting function
        })
      }
    })
  }
}

const generateCustomRows = (rowList) => {
  const table = document.getElementById('table5_table');
  const tBody = table && table.getElementsByTagName('tbody')[0];
  if (tBody) {
    tBody.innerHTML = '';
    for(let row of rowList) {
      const rowCount = tBody.rows.length;
      const tableRow = tBody.insertRow(rowCount);
      const hiddenRow = tBody.insertRow(rowCount+1);
      tableRow.classList.add('tr-expandable')
      hiddenRow.id = 'tr_' + rowCount + '_' +row.make
      hiddenRow.classList.add('tr-hidden');
      for (let index =0; index< columnList.length; index++) {
        const cell = tableRow.insertCell(index);
        const icon = index === 0 ? `<nexus-icon class="expandable-icon" src="./assets/icons/content/ic_add_24px.svg"></nexus-icon>` : ''
        cell.innerHTML = icon + row[columnList[index]];
        const hiddelCell = hiddenRow.insertCell(index);
        hiddelCell.innerHTML = row[columnList[index]];
      }
    }
    const rows = tBody.querySelectorAll('tr');
    rows.forEach((row, index) => {
      if(!row.hasAttribute('id')) {
        row.addEventListener('click', () => onRowClicked(row, index));
      }
    });
  }
}

const loadFirstTable = () => {
  const table11 = document.getElementById('table11');
  table11.rows = tableData;
  table11.columns = exColumnDefs;
};

const loadTable2 = () => {
  const table2 = document.getElementById('table2');
  table2.rows = tableData;
  table2.columns = exColumnDefs;
};

const loadTable3 = () => {
  const table3 = document.getElementById('table3');
  table3.rows = tableData;
  table3.columns = exColumnDefs;
};

const loadTable4 = () => {
  const table4 = document.getElementById('table4');
  table4.rows = tableData;
  table4.columns = exColumnDefs;
  table4.addEventListener('rowSelect', (event) => {
    const selectedRows = document.getElementById('displaySelectedRows');
    selectedRows.innerText = `Number of Selected Rows ${event?.detail?.length}`;
  });
};

const loadTable5 = () => {
  setTimeout(() => {
    generateCustomHeader();
    generateCustomRows(tableData.slice(0, 5));
  }, 2000)
};

const loadTable6 = () => {
  const table6 = document.getElementById('table6');
  const columnData = JSON.parse(JSON.stringify(exColumnDefs));
  columnData[3].isSortable = false;
  table6.columns = columnData;
  table6.totalItems = tableData.length;
  setTimeout(() => {
    generateCustomBodyRows(tableData.slice(0, 5));
  }, 2000);
}

const onChangeEvent = (_eventData) => {
  //Do something
}

document.getElementById('table3').addEventListener('tableChangeEvent', (eventData) => {
  onChangeEvent(eventData);
});

const onTableChangeEvent = (_eventData) => {
  //Do something
  const currentPage = _eventData.detail.currentPage;
  const from = currentPage * _eventData.detail.pageSize -_eventData.detail.pageSize;
  const end = currentPage * _eventData.detail.pageSize;
  const rowlist = tableData.slice(from, end);
  generateCustomRows(rowlist);
}

document.getElementById('table5').addEventListener('tableChangeEvent', (eventData) => {
  onTableChangeEvent(eventData);
});

const tablePaginationEl = document.getElementById('pagination_custom');

tablePaginationEl.addEventListener('changeEvent', (event) => {
  tablePaginationEl.setAttribute('current', event.detail);
  const data = {
    currentPage: event.detail,
    pageSize: 5
  }
  onTableChangeEvent(data);
});

const onBodyRowClicked = (row, index) => {
  const hiddenId = 'tr_' + index + '_' + row.getElementsByTagName('td')[1].innerText;
  const icon = row.querySelector('nexus-icon');
  if(icon.classList.contains('expandable-icon')) {
    icon.setAttribute('src', './assets/icons/hardware/ic_keyboard_arrow_up_24px.svg')
  } else {
    icon.setAttribute('src', './assets/icons/hardware/ic_keyboard_arrow_down_24px.svg')
  }
  icon.classList.toggle('expandable-icon');
  const hidderRow = document.getElementById(hiddenId);
  hidderRow && hidderRow.classList.toggle('tr-hidden');
}

const generateCustomBodyRows = (rowList) => {
  const table = document.getElementById('table6_table');
  const tBody = table && table.getElementsByTagName('tbody')[0];
  if (tBody) {
    tBody.innerHTML = '';
    for(let row of rowList) {
      const rowCount = tBody.rows.length;
      const tableRow = tBody.insertRow(rowCount);
      const hiddenRow = tBody.insertRow(rowCount+1);
      tableRow.classList.add('tr-expandable')
      hiddenRow.id = 'tr_' + rowCount + '_' +row.model
      hiddenRow.classList.add('tr-hidden');
      columnList.forEach((_key, index, arr) => {
        const cell = tableRow.insertCell(index);
        const icon = index === 0 ? `<nexus-icon class="expandable-icon" src="./assets/icons/hardware/ic_keyboard_arrow_down_24px.svg"></nexus-icon>` : ''
        cell.innerHTML = icon + row[arr[index]];
        const hiddelCell = hiddenRow.insertCell(index);
        hiddelCell.innerHTML = row[arr[index]];
      })
    }
    const rows = tBody.querySelectorAll('tr');
    rows.forEach((row, index) => {
      if(!row.hasAttribute('id')) {
        row.addEventListener('click', () => onBodyRowClicked(row, index));
      }
    });
  }
}

const onCustomTableChangeEvent = (_eventData) => {
  const currentPage = _eventData.currentPage;
  const from = currentPage * _eventData.pageSize -_eventData.pageSize;
  const end = currentPage * _eventData.pageSize;
  const rowlist = tableData.slice(from, end);
  generateCustomBodyRows(rowlist);
}

document.getElementById('table6').addEventListener('tableChangeEvent', (eventData) => {
  onCustomTableChangeEvent(eventData.detail);
});


loadFirstTable();
loadTable2();
loadTable3();
loadTable4();
loadTable5();
loadTable6();
