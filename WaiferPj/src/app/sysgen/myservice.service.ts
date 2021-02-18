// import {Http,Response} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  data: string [] =[];
  // dataUrl: string = "../../assets/tutorials.json";

  // constructor (private http:Http){  }

//  getAllTutorial(){
//    return this.http.get(this.dataUrl)
//  }

  addData(item){   ;
    this.data.push(item);
  }

  getData(){
    // return 'I am service.';
    return this.data;
  }
}
 