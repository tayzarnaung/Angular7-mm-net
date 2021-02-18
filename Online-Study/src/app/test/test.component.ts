import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [`
    .text-success{    color: green;      }
    .text-danger {    color: red;        }
    .text-special{    font-style: italic;}
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // @Input() private parentData;
  @Input('parentData') private title : String;
  public my_id ="test ID"
  output : String;
  public isSpecial = true;  bool = false;   hasError = true

  successClass =  "text-success"; 
  highlightColor = "orange";
  
  greet;
  value= "blue"; list = ['hi' , 'hey', 'hello']
  
  messageClasses = {
    "text-success" : !this.hasError,
    "text-danger"  : this.hasError,
    "text-special" : this.isSpecial
  }
 
  titleStyles = {
    color          : "blue",
    backgroundColor: "gray",
    fontStyle      : "italic"
  }
 
 
   greetUser(){
     return "Hello, " + this.title
   }
 
   onClick(my_event){
     console.log(my_event)
     this.greet = my_event.type
   }
 
   LogMessage(event){
     console.log(event)
   }

}
