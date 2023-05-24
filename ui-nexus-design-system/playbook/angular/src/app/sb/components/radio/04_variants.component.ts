import { Component, Input } from '@angular/core';
import { radio, variants } from '../../constants';

@Component({
  selector: 'app-variants',
  templateUrl: './04_variants.component.html'
})
export default class VariantsComponent {
  @Input() name = radio.name;

  @Input() disabled: boolean = true;

  variants = variants;
}
