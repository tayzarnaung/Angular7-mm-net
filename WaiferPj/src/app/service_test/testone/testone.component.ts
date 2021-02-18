import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../../sysgen/myservice.service';

@Component({
  selector: 'app-testone',
  templateUrl: './testone.component.html',
  styleUrls: ['./testone.component.css']
})
export class TestoneComponent implements OnInit {
  // data: string = "";
  dataArr: string [] = [];
  constructor(private serv:MyserviceService) { }

  ngOnInit() {
    this.dataArr = this.serv.getData();
    // this.dataArr.push("hi");
  }

  addData(data){
    this.serv.addData(data); 
  }

}
