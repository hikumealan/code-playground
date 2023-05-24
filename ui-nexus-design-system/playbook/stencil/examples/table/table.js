const tableDefault = document.getElementById('table1');
tableDefault.setAttribute('pagination', true);
tableDefault.setAttribute('page-size', 5);
tableDefault.setAttribute('row-selection', true);
tableDefault.setAttribute('page-size-label', 'Items Per Page:');

const rowData = [
  {
    make: 'Volkswagen',
    model: 'ID4',
    year: '2020',
    price: 55100,
    owner: 'Iron Man',
    location: 'PA'
  },
  {
    make: 'Ferrari',
    model: 'GTS',
    year: '2022',
    price: 320000,
    owner: 'Captain America',
    location: 'LA'
  },
  {
    make: 'Porsche',
    model: 'Boxster',
    year: '2012',
    price: 72200,
    owner: 'Captain Marvel',
    location: 'PA'
  },
  {
    make: 'Volkswagen',
    model: 'ID4',
    year: '2015',
    price: 24100,
    owner: 'Spiderman',
    location: 'NY'
  },
  {
    make: 'Ferrari',
    model: 'GTS',
    year: '2021',
    price: 31100,
    owner: 'Black Widow',
    location: 'NY'
  },
  {
    make: 'Porsche',
    model: 'Boxster',
    year: '2015',
    price: 54500,
    owner: 'Hulk',
    location: 'AK'
  },
  {
    make: 'Volkswagen',
    model: 'ID4',
    year: '2017',
    price: 29000,
    owner: 'Wanda',
    location: 'NJ'
  },
  {
    make: 'Ferrari',
    model: 'GTS',
    year: '2018',
    price: 27500,
    owner: 'Thor',
    location: 'MD'
  },
  {
    make: 'Porsche',
    model: 'Boxster',
    year: '2022',
    price: 875000,
    owner: 'Loki',
    location: 'IL'
  },
  {
    make: 'Ferrari',
    model: 'GTS',
    year: '2010',
    price: 29500,
    owner: 'Thanos',
    location: 'TX'
  },
  {
    make: 'Porsche',
    model: 'Boxster',
    year: '2012',
    price: 12300,
    owner: 'Dr. Strange',
    location: 'NY'
  }
];
const columnDefs = [
  {
    field: 'make',
    label: 'Automobile Make',
    isSortable: true
  },
  {
    field: 'model',
    label: 'Automobile Model',
    isSortable: true,
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
    label: 'Automobile Owner'
  },
  {
    field: 'location',
    label: 'Automobile Location'
  },
  {
    field: 'price',
    label: 'Automobile Sale Price',
    isSortable: false,
    cellRenderer: (value) => `<i style="color: ${value < 40000 ? 'red' : 'green'}">
      ${
        value < 40000 ? '<nexus-icon size="xs" src="./assets/icons/alert/ic_warning_24px.svg"></nexus-icon>' : ''
      } ${value} </i>`,
    headerClass: 'text-right',
    cellClass: 'text-right'
  }
];

const loadTable1 = () => {
  const table1 = document.getElementById('table1');
  table1.rows = rowData;
  table1.columns = columnDefs;
  table1.pageSizeOpt = [5, 10, 25];
};

loadTable1();
