import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { selectNative } from '../../constants';

@Component({
  selector: 'app-select',
  templateUrl: './01_select.component.html'
})
export default class SelectComponent {
  @Input() delimiter = ',';

  @Input() disabled = false;

  @Input() multiple = false;

  @Input() required = false;

  @Input() type = 'native';

  @Input() placeholder = 'Please Select';

  reactiveValue = new FormControl('', Validators.required);

  options = selectNative;

  handleChange(event) {
    this.reactiveValue.setValue(event.target.value);
  }
}
