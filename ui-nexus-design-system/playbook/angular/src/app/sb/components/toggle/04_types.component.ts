import { Component } from '@angular/core';
import { types } from '../../constants';

@Component({
  selector: 'app-types',
  templateUrl: './04_types.component.html'
})
export default class TypesComponent {
  types = types;
}
