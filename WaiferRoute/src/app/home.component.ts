import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
    <button (click)="gotoPost()">Go to Post</button>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  
  constructor(private router : Router) { }

  ngOnInit() {
  }

  gotoPost(){
    // alert("hi")
    this.router.navigate(["post", 3] , {queryParams:{'name':"Ag Ag", 'age': '23'}, fragment:'section3'})
  }

}
