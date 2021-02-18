import { Component, OnInit } from '@angular/core';

import { User } from '../user'
import { EnrollmentService } from '../enrollment.service'

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  topics = ['Angular', 'React', 'View']
  topicHasError = true;
  userModel = new User('a', 'rob@test.com', '1234567890', '', 'morning', true);
  submitted = false; errorMesg;

  constructor(private _enrollmentService: EnrollmentService) { }

  ngOnInit() {
    //console.log .error .warn  .info  .debug
    // console.log(this.userModel.name)
  }

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;

    console.info(this.userModel)
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success', data),
        // error => console.error('Error', error)
        error => this.errorMesg = error.statusText
      )

 
  }

}
