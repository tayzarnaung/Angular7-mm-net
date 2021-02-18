import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../services/user.model';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  user:User;
  editUser:User;

  constructor(private usersService:UsersService) { }

  ngOnInit() {    
    this.editUser = this.usersService.initiazlizeUser; 
    this.usersService.user.subscribe(user => this.user = user)
    //this.usersService.cast.subscribe(user=> this.user = user);  
  }

  editTheUser(name?){
    // this.editUser.name = name
    // this.usersService.editUser(this.editUser);
    this.usersService.getBevUser().next(this.editUser);
  }


}
