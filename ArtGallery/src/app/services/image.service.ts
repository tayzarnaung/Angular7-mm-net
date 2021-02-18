import { Injectable } from '@angular/core';
import { Image } from 'src/app/models/image'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images: Image[] = []
  imgLink = "../assets/data/gallery.json"

  constructor() {
    for (let i = 1; i < 7; i++)
      this.images.push(new Image('' + i + '', "title", "Description",
        "/assets/imgs/index" + i + ".jpeg", "/assets/imgs/index" + i + ".jpeg"))
  }

  getImageArr() {
    return this.images;
  }

}
