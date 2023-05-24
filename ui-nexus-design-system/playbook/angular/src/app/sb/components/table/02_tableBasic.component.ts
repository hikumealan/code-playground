import { Component } from '@angular/core';
import { rowData, columnDefs } from '../../constants';

@Component({
  selector: 'app-table-basic',
  templateUrl: './02_tableBasic.component.html'
})
export default class TableBasicComponent {
  tHeadSection = columnDefs.map((item) => item.label);

  tData = rowData.map((row) => Object.values(row));
}
