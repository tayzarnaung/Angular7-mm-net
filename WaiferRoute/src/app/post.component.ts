import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  template: `
    <br>
    <a routerLink="postdetail">Post Detail</a> |
    <a routerLink="editpost">Edit Post</a>
    <router-outlet></router-outlet>
  `,
  styles: [`
    h2{ color: #fff; }
  `]
})
export class PostComponent implements OnInit {
  id; name; age;

  constructor(private activatedRoute:ActivatedRoute) {     
    //  const id = +this.activatedRoute.snapshot.paramMap.get('id');
    // JavaScript (+) operator converts the string to a number
    // alert(id)

    // this.id = this.activatedRoute.snapshot.params["id"]

    this.activatedRoute.params.subscribe(
      (my_param: any) => {
        this.id = my_param["id"]
      },error => {

      }
    );  
    
    this.activatedRoute.queryParams.subscribe(
      my_query => {
        this.name = my_query['name'],
        this.age  = my_query[ 'age' ]
      }
    );
  }

  ngOnInit() {
    alert("id:" + this.id + ", Name:" + this.name + ", Age:" + this.age)
  }

}
