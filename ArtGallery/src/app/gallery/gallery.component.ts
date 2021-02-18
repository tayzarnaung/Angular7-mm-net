import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: ['']
})
export class GalleryComponent implements OnInit {
  selectedImage : Image;
  constructor() { }

  ngOnInit() {
  }

  setImage(image : Image){
    this.selectedImage = image;
    console.log(this.selectedImage)
  }

}
