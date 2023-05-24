import { Component, Input } from '@angular/core';

import { checkBox } from '../../constants';
@Component({
  selector: 'app-checkbox',
  templateUrl: './01_checkbox.component.html'
})
export default class CheckboxComponent {
  @Input() disabled = checkBox.disabled;

  @Input() checked = checkBox.checked;

  @Input() indeterminate = checkBox.indeterminate;

  text = checkBox.text;

  attrId = checkBox.attrId;

  required = checkBox.required;
}
