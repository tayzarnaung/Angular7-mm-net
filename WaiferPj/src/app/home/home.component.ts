import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myStr : string= "String interpolation"; 
  bol =false; num;
  data = "Start  Binding";
  constructor() { }

  ngOnInit() {
  }

  myToggle(){
    // alert(123);
    this.bol = !this.bol;
  }

  show_data(){
    alert(this.data); 
  }

  addTwoNum(num1, num2 : number){
    this.num = num1+num2;
    alert("Sum:" + this.num);console.log("Sum:" + this.num)
  }

  
}
