import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-department-list',
  template: `
    <ul>
      <li (click)="selectedDept(department.id)" *ngFor="let department of departments"
       [class.selected]="isSelected(department)" >
        {{department.name}}
      </li>
    </ul>
  `,
  styles: [`
    ul{cursor:pointer; width:25%;}
    li{padding:5px; background-color:aqua;margin:5px;}
    li.selected{background-color:black;color:white;}
  `]
})
export class DepartmentListComponent implements OnInit {

  departments ;  selectedId;
  constructor(private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(!this.departments)
      this.departments= [
        {"id":1, "name":"DevSoft"}, 
        {"id":2, "name":"QA"}, 
        {"id":3, "name":"Operation"}, 
        {"id":4, "name":"Customer Service"}
      ];
    else    console.log(this.departments)

    this.activatedRoute.paramMap.subscribe( (params : ParamMap)=> {
      this.selectedId = parseInt(params.get('my_id'))
      console.log(this.selectedId)
    } )
  }

  selectedDept(id){
    // this.router.navigate([ "departments" , id])
    this.router.navigate([id] , {relativeTo:this.activatedRoute})
  }

  isSelected(dept) {
    return dept.id == this.selectedId;
  }

}
