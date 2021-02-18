import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html'
})
export class ImageComponent implements OnInit {
  @Input() myimage : Image;
  constructor() { }

  ngOnInit() {
  }

}
