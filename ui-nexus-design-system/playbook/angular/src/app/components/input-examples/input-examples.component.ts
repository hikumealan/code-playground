import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-examples',
  templateUrl: './input-examples.component.html'
})
export class InputExamplesComponent {
  reactiveValue = new FormControl('');
}
