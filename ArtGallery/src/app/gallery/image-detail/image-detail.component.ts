import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  @Input() getSelectedImage: Image;
  constructor() { }
  
  ngOnInit() {
    if(!this.getSelectedImage) console.log("Image is: " + this.getSelectedImage)
    // if(this.getSelectedImage == null) console.log("Image is: " + this.getSelectedImage)
  }

}
