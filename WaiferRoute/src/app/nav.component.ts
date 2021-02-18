import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <nav>
    <a routerLink="home" routerLinkActive="active_css">Home</a> |
    <a routerLink="about" routerLinkActive="active_css" [preserveQueryParams]="true" [preserveFragment]="true">About</a>  |    
    <a [routerLink]="['post',1]" [queryParams]="{'name':'Mg Mg', 'age':'21'}" 
      fragment="section2" routerLinkActive="active_css">Post</a>  |

    <!--  <a routerLink = "post/1" [queryParams]="{'name':'Mg Mg', 'age':'21'}" fragment="section2">Post</a>   -->
  
    <a routerLink="departments">Departments</a>
  </nav> 
  
  <router-outlet></router-outlet> 
  ` ,
  styles: [`
    div{      margin-bottom: 30px;    }
    
    .active_css{
      background-color:coral;
      padding: 20px;
      margin-right: 30px; 
    }
  `]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
