import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { RegistrationService } from '../registration.service';
import { forbiddenNameValidator } from 'src/app/shared/user-name.validator';
import { passwordValidator } from '../shared/password-validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  get userName() {
    return this.registrationForm.get('userName');
  }
    get getPassword() {
    return this.registrationForm.get('password');
  }

  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) { }

  registrationForm = this.fb.group({

    userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
    password: [''],
    confirmPassword: [''],

    info: this.fb.group({
      hi: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      hi1: ['']
    }),

    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    }, { validator: passwordValidator })

  })

  //  registrationForm = new FormGroup({
  //     userName : new FormControl('Vishwas'),
  //     password: new FormControl(''),
  //     confirmPassword: new FormControl(''),

  //     address: new FormGroup({
  //       city: new FormControl(),
  //       state: new FormControl(''),
  //       postalCode: new FormControl('')
  //     })
  //   });

  loadApiData() {
    this.registrationForm.patchValue({    //setValue

      // userName: 'Bruce',
      // password: 'test',
      // confirmPassword: 'test',

      address: {
        city: 'City',
        state: 'State',
        postalCode: 'Postal code'
      }
    });
  }


  onSubmit() {
    console.log(this.registrationForm.get('info').value);
    console.info(this.registrationForm.get('address').value)


    console.log(this.registrationForm.value)

    //this.registrationForm.reset();

    // this._registrationService.register(this.registrationForm.value)
    //   .subscribe(
    //     response => console.log("Success" , response),
    //     error   =>  console.log("error" , error)
    //   )
  }
}
