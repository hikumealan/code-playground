import { Component, Input } from '@angular/core';
import { defaultToast } from '../../constants';

@Component({
  selector: 'app-toast',
  templateUrl: './01_toast.component.html'
})
export default class ToastComponent {
  @Input() autoClose: number;

  @Input() closeable: boolean = defaultToast.closeable;

  @Input() show: boolean = defaultToast.show;

  @Input() variant: string = defaultToast.variant;

  @Input() iconSrc: string = defaultToast.iconSrc;

  @Input() position: string = defaultToast.position;

  message = defaultToast.message;
}
