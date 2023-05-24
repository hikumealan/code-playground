import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { configuration } from '../../constants';
@Component({
  selector: 'app-checkbox-configuration',
  templateUrl: './02_configuration.component.html'
})
export default class ConfigurationComponent {
  checkedValue = new FormControl(false);

  indeterminateValue = new FormControl(false);

  disabledValue = new FormControl(false);

  check = configuration.check;

  indeterminate = configuration.indeterminate;

  disabled = configuration.disabled;

  text = configuration.title;

  example = configuration.example;

  exampleTitle = configuration.exampleTitle;
}
