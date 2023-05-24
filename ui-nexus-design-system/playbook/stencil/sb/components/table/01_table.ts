import html from '!!raw-loader!../../examples/table/01_table.html';
import js from '!!raw-loader!../../examples/table/01_table.js';
import { rowData, columnDefs } from "../../constants";

const Table = ({
    attrId = '',
    columns = [],
    currentPage = null,
    enablePageSizeOption = '',
    maxHeight = '',
    pageSize = 5,
    pageSizeLabel = 'Items Per Page:',
    pageSizeOpt = [5, 10, 25],
    pagination = true,
    rowSelection = false,
    rows = [],
    sortAscIcon = './assets/icons/navigation/ic_arrow_upward_24px.svg',
    sortDefaultIcon = './assets/icons/content/ic_sort_24px.svg',
    sortDescIcon = './assets/icons/navigation/ic_arrow_downward_24px.svg',
    totalItems = '',
    type = 'basic'
}) => {
    const defaultTable = document.createElement('section');
    const id = 'nexus-table-script';
    defaultTable.innerHTML = html
        .replace('attr-id=""', `attr-id="${attrId}"`)
        .replace('columns="[]"', `columns="${new Boolean(columns).toString()}"`)
        .replace('currentPage="null"', `currentPage="${new Boolean(currentPage).toString()}"`)
        .replace('enablePageSizeOption=""', `enablePageSizeOption="${new Boolean(enablePageSizeOption).toString()}"`)
        .replace('page-size="5"', `page-size="${new Boolean(pageSize).toString()}"`)
        .replace('max-height=""', `max-height="${maxHeight}"`)
        .replace('page-size-label="Items Per Page:"', `page-size-label="${pageSizeLabel}"`)
        .replace('pageSizeOpt="[5, 10, 25]"', `pageSizeOpt="${new Boolean(pageSizeOpt).toString()}"`)
        .replace('pagination="true"', `pagination="${new Boolean(pagination).toString()}"`)
        .replace('row-selection="false"', `pageSizeOpt="${new Boolean(rowSelection).toString()}"`)
        .replace('rows="[]"', `rows="${rows}"`)
        .replace('sortAscIcon="./assets/icons/navigation/ic_arrow_upward_24px.svg"', `sortAscIcon="${sortAscIcon}"`)
        .replace('sortDefaultIcon="./assets/icons/content/ic_sort_24px.svg"', `sortDefaultIcon="${sortDefaultIcon}"`)
        .replace('sortDescIcon="./assets/icons/navigation/ic_arrow_downward_24px.svg"', `sortDescIcon="${sortDescIcon}"`)
        .replace('totalItems=""', `totalItems="${totalItems}"`)
        .replace('type="basic"', `type="${type}"`)


        defaultTable.setAttribute('rows', `'${rowData}'`);
        defaultTable.setAttribute('columns', `'${columnDefs}'`);

    const existingScript = document.getElementById(id) as HTMLElement;
    if (existingScript) {
        existingScript.remove()   
    }

    const script = document.createElement('script');
    script.id = id
    script.text = `
        (function(){${js}})();
    `

    setTimeout(() => document.body.appendChild(script), 1000);

    return defaultTable;
};

export default Table;