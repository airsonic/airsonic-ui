import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  menuOpen = false;
  collapsed = true;
  query: string;
  username: string;

  constructor(private userService: UserService,
              private router: Router) {}


  // Is this clean ? something seems wrong
  // having duplicate code in app.component.ts and top.component.ts
  // We need to load username here but redirection to login page
  // should be done by the app.component ?
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
