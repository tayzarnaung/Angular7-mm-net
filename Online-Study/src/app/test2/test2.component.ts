import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  @Input('my_css') my_css_design;
  @Input() hi;    @Input() func;  @Input() private list;

  @Output() private childEvent = new EventEmitter();

  public empArr = [];errorMsg;

  constructor(private empServ :EmployeeService) { }

  ngOnInit() {
    // this.empArr = this.empServ.getEmployees()
    this.empServ.getEmployees()
      .subscribe(data => this.empArr = data,
                 error => this.errorMsg = error);

  }

  fireEvent(){
    this.childEvent.emit('test2 component emits message to test1 component')
  }

}
