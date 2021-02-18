import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
  <p>  department-detail selected at id = {{id}}  </p>
  <a (click)="goPrev()">Previous</a> |
  <a (click)="goNext()">Next</a>

  <div>
    <button (click)="gotoDepartments()"> Go to Dept</button>
  </div>
  `,
  styles: [`
    a{cursor:pointer;}
  `]
})
export class DepartmentDetailComponent implements OnInit {

  protected id;
  constructor(protected activatedRoute : ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // let id =  parseInt(this.activatedRoute.snapshot.paramMap.get('deptId') );
    // this.deptId = id;
    //only work in goPrev()  like --thi.deptId
    this.activatedRoute.paramMap.subscribe( (params : ParamMap) =>{
      this.id = +params.get('deptId') ;
    } );
  }

  goPrev(){
    let prevId = --this.id
    // this.router.navigate(['/departments', prevId])
    this.router.navigate(['../', prevId] , {relativeTo:this.activatedRoute})
  }

  goNext(){
    let nextId = this.id +1
    // this.router.navigate(['/departments', nextId])
    this.router.navigate(['../', nextId, {hi:"hello"}] , {relativeTo:this.activatedRoute})
  }

  gotoDepartments(){
    let selectedId = this.id ? this.id : null;
    // this.router.navigate(['/departments', {my_id: selectedId, test:"optionalRouteParameter"} ])
    this.router.navigate([ '../', {my_id: selectedId, test:"optionalRouteParameter"} ] ,
         {relativeTo:this.activatedRoute} )
  }
}
