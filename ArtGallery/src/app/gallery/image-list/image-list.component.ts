import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Image } from '../../models/image'
import { ImageService} from 'src/app/services/image.service'

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {

  // imgArr = []
  images : Image[] = [];
  selectedImage : Image;
  @Output() sendImage = new EventEmitter<Image>();

  constructor(private imgs : ImageService) { }

  ngOnInit() {
    // for (let i = 1; i < 7; i++) 
      // this.imgArr.push('' + i + '')
    this.images = this.imgs.getImageArr();  
    console.log(this.images) 
  }

  setSelectedImage(image : Image){
    // this.selectedImage = image;
    // console.log(this.selectedImage);  
    this.sendImage.emit(image); 
  }

}
 