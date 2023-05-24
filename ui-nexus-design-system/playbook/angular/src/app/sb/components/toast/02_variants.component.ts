import { Component } from '@angular/core';
import { toastVariants } from '../../constants';

@Component({
  selector: 'app-toast-variants',
  templateUrl: './02_variants.component.html'
})
export default class ToastVariantComponent {
  toastVariants = toastVariants;
}
