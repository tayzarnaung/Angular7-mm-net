import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../services/user.model';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  user:User;
  constructor(private usersService:UsersService) { }

  ngOnInit() {
    this.usersService.getBevUser().subscribe(user=> this.user = user);
  }

}
