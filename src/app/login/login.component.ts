import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';
import { SystemService } from '../shared/service/system.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model = {
    user: '',
    password: '',
    server: ''
  };
  constructor(private authService: AuthService,
    private systemService: SystemService,
    private router: Router) { }

  ngOnInit() {
    if (this.authService.hasMyUser()) {
      this.router.navigate(['']);
    }
  }

  onSubmit() {
    this.authService.loginMyUser(this.model.user, this.model.password, this.model.server);
    this.systemService.ping().subscribe(
      success => {
        this.router.navigate(['']);
      },
      err => console.log(err));
  }
}
