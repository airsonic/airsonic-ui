import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  username: string;
  sideMenuClosed = false; // Need to export the side-menu function to a dedicated service

  constructor(private userService: UserService,
              private router: Router) {}

  ngOnInit() {
    if (!this.userService.hasUser()) {
      this.router.navigateByUrl('/login');
    } else {
      this.username = this.userService.getUser().name;
    }
  }

  // Need to export the side-menu function to a dedicated service
  toggleSideMenu() {
    this.sideMenuClosed = !this.sideMenuClosed;
  }
}
