import { Component, Input } from '@angular/core';
import { chipVariant } from '../../constants';

@Component({
  selector: 'app-chip-variant',
  templateUrl: './02_variant.component.html'
})
export default class ChipVariantComponent {
  chipVariant = chipVariant;
}
