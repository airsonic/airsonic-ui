import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuOpen = false;
  collapsed = true;
  query: string;
  username: string;

  constructor(private userService: UserService,
              private router: Router) {}

  ngOnInit() {
    if (!this.userService.hasUser()) {
      this.router.navigateByUrl('/login');
    } else {
      this.username = this.userService.getUser().name;
    }
  }

  openMenu() {
    this.menuOpen = !this.menuOpen;
  }

  collapseOpen() {
    this.collapsed = !this.collapsed;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/login').then(() => {
      this.closeMenu();
    });
  }

  onSearch(query: string) {
    this.router.navigate(['/search', query]);
  }
}
