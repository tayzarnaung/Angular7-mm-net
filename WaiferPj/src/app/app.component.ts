import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'OrgAngular';
  items = ['PHP', 'Angular', "Nodejs"];
  newitem = '72coder';

  date = new Date();
  obj = {
    name: "MgMg",
    bol: true
  };
  digits = [4, 2, 4, 5, 7, 8];
  alphas = ['One', 'Two', "Three", "Four"];

  languages = ['PHP', 'AJAX', 'JSON', 'LARAVEL'];
  myform; baseConverter;

   ngOnInit(): void {
    this.myform = new FormGroup({
			uname : new FormControl('',Validators.compose([
						Validators.required,
						Validators.minLength(5),
						Validators.pattern('[\\w\\-\\@\\s/]+') 	  ])	
			),
			
			pword: new FormControl('', this.mycustomValidator),
			lang:     new FormControl('')
	  });

    this.baseConverter = new FormGroup({
      'binary': new FormControl(''),
      'decimal': new FormControl(''),
      'octal': new FormControl(''),
      'hexa': new FormControl('')
    });
  }


  mycustomValidator(my_val) {
    if (my_val.value.length <= 3)       return { 'pword': false };    
  }

  submitData = function (data) {
    console.log(data);
  }

  // submitData(data){
  //   console.log(data)
  // }



  addItem() {
    this.items.push(this.newitem);
    this.newitem = '';
  }
  removeItem(index) {
    this.items.splice(index, 1);
  }
  


  binaryChange = function (newVal) {
    // binaryChange(newVal){
    // console.log(newVal);
    if (newVal !== "") {
      this.baseConverter.patchValue({ 'decimal': parseInt(newVal, 2).toString(10) })
      this.baseConverter.patchValue({ 'octal': parseInt(newVal, 2).toString(8) })
      this.baseConverter.patchValue({ 'hexa': parseInt(newVal, 2).toString(16) })
    }
    else {
      this.baseConverter.patchValue({ 'decimal': '' })
      this.baseConverter.patchValue({ 'octal': '' })
      this.baseConverter.patchValue({ 'hexa': '' })
    }
  }

  bol: boolean = false
  decimalChange = function (newVal) {
    this.bol = !this.bol;
    if (this.bol) {
      if (newVal !== "") {
        this.baseConverter.patchValue({ 'binary': parseInt(newVal, 10).toString(2) })
        this.baseConverter.patchValue({ 'octal': parseInt(newVal, 10).toString(8) })
        this.baseConverter.patchValue({ 'hexa': parseInt(newVal, 10).toString(16) })
      }
      else {
        this.baseConverter.patchValue({ 'binary': '' })
        this.baseConverter.patchValue({ 'octal': '' })
        this.baseConverter.patchValue({ 'hexa': '' })
      }
    }
    this.bol = false;
  }

}
