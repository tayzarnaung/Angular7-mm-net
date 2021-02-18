import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../../sysgen/myservice.service';

@Component({
  selector: 'app-testtwo',
  templateUrl: './testtwo.component.html',
  styleUrls: ['./testtwo.component.css']
})
export class TesttwoComponent implements OnInit {

  // data = "";
  dataArr: string [] = [];
  constructor(private serv:MyserviceService) { }

  ngOnInit() {
    this.dataArr = this.serv.getData(); 
  }

}
