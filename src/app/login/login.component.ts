import { Component } from '@angular/core';
import { UserService } from '../shared/service/user.service';
import { SystemService } from '../shared/service/system.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = {
    user: '',
    password: '',
    server: ''
  };
  constructor(private userService: UserService,
              private systemService: SystemService,
              private router: Router) { }

  onSubmit() {
    this.userService.loginUser(this.model.user, this.model.password, this.model.server);
    this.systemService.ping().subscribe(
      success => this.router.navigate(['']),
      err => console.log(err));
  }

}
