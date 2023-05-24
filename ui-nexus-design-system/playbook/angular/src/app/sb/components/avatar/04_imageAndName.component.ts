import { Component } from '@angular/core';
import { imageAndName } from '../../constants';
@Component({
  selector: 'app-avatar-examples-imageandname',
  templateUrl: './04_imageAndName.component.html'
})
export default class ImageAndNameComponent {
  name = imageAndName.name;

  size = imageAndName.size;

  image = imageAndName.image;
}
