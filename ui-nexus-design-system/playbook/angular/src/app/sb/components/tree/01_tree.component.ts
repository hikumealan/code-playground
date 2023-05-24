import { Component, Input } from '@angular/core';
import { DefaultTree } from '../../constants';

@Component({
  selector: 'app-tree',
  templateUrl: './01_tree.component.html'
})
export default class TreeComponent {
  @Input() open: boolean = false;

  defaultTree = DefaultTree;
}
