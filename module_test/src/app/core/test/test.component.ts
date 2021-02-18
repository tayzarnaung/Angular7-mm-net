import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  values : string;
  constructor() { }

  ngOnInit() {
  }
  
  onKey(event : any){
    console.info(event)
    this.values = event + ' | ';
  }
}
