export const filterTableConstants = {
    placeholder: 'Search By Make',
    searchIconSrc: './assets/icons/action/ic_search_24px.svg',
    colDefs: [
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
            label: 'Year',
            isSortable: false

        },
        {
            field: 'owner',
            label: 'Car Owner',
            isSortable: false

        },
        {
            field: 'location',
            label: 'Location',
            isSortable: false

        },
        {
            field: 'price',
            label: 'Sale Price',
            isSortable: false,
            cellRenderer: (value) => `<i style="color: ${value < 55050 ? 'red' : 'green'}">
            ${value < 55050 ? '<nexus-icon size="xs" src="./assets/icons/alert/ic_warning_24px.svg"></nexus-icon>' : ''} ${value} </i>`
        }
    ],
    rowData: [
        {
          make: 'Toyota',
          model: 'Outback',
          year: '2020',
          price: 35500,
          owner: 'Iron Man',
          location: 'PA'
        },
        {
          make: 'Tesla',
          model: 'Model 3',
          year: '2022',
          price: 32500,
          owner: 'Captain America',
          location: 'LA'
        },
        {
          make: 'Nissan',
          model: 'Altima',
          year: '2010',
          price: 72500,
          owner: 'Captain Marvel',
          location: 'PA'
        },
        {
          make: 'Toyota',
          model: 'Outback',
          year: '2015',
          price: 24500,
          owner: 'Spiderman',
          location: 'NY'
        },
        {
          make: 'Tesla',
          model: 'Model 3',
          year: '2021',
          price: 35050,
          owner: 'Black Widow',
          location: 'NY'
        }
      ]
};