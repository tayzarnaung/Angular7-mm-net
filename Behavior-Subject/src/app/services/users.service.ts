import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user.model';

@Injectable()
export class UsersService {
  // private user = new BehaviorSubject<string>(null);
  // userModel :User = { 'name':'Tay Zar', 'job':'developer', 'age':22 }  
  userModel: User = { name: 'Tay Zar', job: 'developer', age: 22 }

  user = new BehaviorSubject<User>(this.userModel);
  // cast = this.user.asObservable();

  getBevUser() {
    return this.user ;
  }

  // editUser(newUser: User) {
  //   this.user.next(newUser);
  //   console.log(this.user.value);
  // }

   get initiazlizeUser(){
    return { 'name':'', 'job':'', 'age':null}
  }



}
