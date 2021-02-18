import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivae } from './postedit.guard';

import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-editpost',
  template: `
    <p>
      editpost works!
    </p>
    <button (click)="done = true">Change Condition</button>
    <button (click)="goHome()">Go Home</button>
    <button (click)="Back()">Back</button>

  `,
  styles: []
})
export class EditpostComponent implements OnInit, ComponentCanDeactivae {

  done ;
  constructor(private router:Router, private location:Location) { }

  ngOnInit() {
  }

  canDeactive(){
    if(!this.done) { 
      console.error(!this.done)   // <-- true
      console.error( this.done)   // <-- undefined
      return confirm('Are you sure to leave this page?')
    }
    console.log("Hi, " + this.done)
    return this.done;
  }

  Back(){
    this.location.back();
  }

  goHome(){
    this.router.navigate([''])
  }

}
