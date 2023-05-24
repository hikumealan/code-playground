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
  }
];

let  rowDataNew=[];

const columnDefs = [
  {
    field: 'make',
    label: 'Automobile Make',
    cellClass:'text-right'
  },
  {
    field: 'model',
    label: 'Automobile Model',
    cellClass:'text-right'
  },
  {
    field: 'year',
    label: 'Automobile Manufactured Year',
    cellClass:'text-right'
  },
  {
    field: 'owner',
    label: 'Automobile Owner',
    cellClass:'text-right'
  },
  {
    field: 'location',
    label: 'Automobile Location',
    cellClass:'text-right'
  },
  {
    field: 'price',
    label: 'Automobile Sale Price',
    cellRenderer: (value) => `<i style="color: ${value < 40000 ? 'red' : 'green'}">
      ${
        value < 40000 ? '<nexus-icon size="xs" src="./assets/icons/alert/ic_warning_24px.svg"></nexus-icon>' : ''
      } ${value} </i>`,
    headerClass: 'text-right',
    cellClass: 'text-right'
  }
];

let tblNexus = document.getElementById('tblNexus');
tblNexus.setAttribute('pagination', true);
tblNexus.setAttribute('page-size', 10);
tblNexus.setAttribute('page-size-label', 'Items Per Page:');

const loadTable = () => {
  tblNexus.rows = rowDataNew;
  tblNexus.columns = columnDefs;
};

const PerformFilterTable = () => {
  const inputText = document.getElementById("nxsInputTable");
  const items = ["Volkswagen",
      "Ferrari",
      "Porsche"];
  let filterItem = items;
  
  console.log(inputText); 
  console.log(typeof inputText); 
  console.log(inputText.value.toLocaleLowerCase);
  filterItem = typeof inputText !== "undefined" && inputText ? items.filter((item) => item.toLocaleLowerCase().indexOf(inputText.value.toLocaleLowerCase()) !== -1) : items;
  const list = document.getElementById("nxsSearchTable");
  list.innerHTML = "";
  filterItem.forEach((item) => {
      const listItem1 = document.createElement("nexus-search-list-item");
      const button1 = document.createElement("button");
      button1.innerText = item;
      listItem1.appendChild(button1);
      list.appendChild(listItem1); 
      rowDataNew =rowData;
  }); 
  loadTable();
};

const RefreshTable=()=>{
  rowDataNew=[];
  let selectedItem= document.querySelector('input').value;
  if(selectedItem !=null && selectedItem !=undefined && selectedItem!='')
 {
   rowDataNew =  rowData.filter(function(newValue) {
     return newValue.make == selectedItem;
   });
 }
 else{
   rowDataNew=rowData;
 }
 
 const tBody = tblNexus && tblNexus.getElementsByTagName('tbody')[0];
 if (tBody) {
   tBody.innerHTML = '';
 }
 const columnList = Object.keys(rowDataNew[0]);
 for(let row of rowDataNew) {
   const rowCount = tBody.rows.length;
   const tableRow = tBody.insertRow(rowCount);
   tableRow.classList.add('text-right');
   columnList.forEach((_key, index, arr) => {
     const cell = tableRow.insertCell(index);
 
     cell.innerHTML =   row[arr[index]];
   })
 }
}

document.getElementById('nxsInputTable').addEventListener('input', () => {
  PerformFilterTable();
});

document.getElementById('nxsIconTable').addEventListener('click', () => {
  RefreshTable();
});

document.getElementById('nxsSearchTable').addEventListener('click', () => {
  RefreshTable();
});
PerformFilterTable();
  