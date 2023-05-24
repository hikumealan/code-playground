import { Component } from '@angular/core';
import { withButton } from '../../constants';
@Component({
  selector: 'app-dropdown-button',
  templateUrl: './02_withButton.component.html'
})
export default class WithButtonComponent {
  primaryOptions = withButton.primaryOptions;

  secondaryOptions = withButton.secondaryOptions;

  add = withButton.add;

  delete = withButton.delete;

  block = withButton.block;

  save = withButton.save;

  load = withButton.load;

  edit = withButton.edit;
}
