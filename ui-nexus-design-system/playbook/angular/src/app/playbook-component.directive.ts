import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appComponent]'
})
export class PlaybookDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
