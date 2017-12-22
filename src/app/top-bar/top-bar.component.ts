import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() username: string;
  profilMenuOpen = false;
  collapsed = true;
  query: string;

  constructor(private userService: UserService,
              private router: Router) {}

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/login').then(() => {
      this.closeProfilMenu();
    });
  }

  openProfilMenu() {
    this.profilMenuOpen = !this.profilMenuOpen;
  }

  closeProfilMenu() {
    this.profilMenuOpen = false;
  }

  collapseOpen() {
    this.collapsed = !this.collapsed;
  }

  onSearch(query: string) {
    this.router.navigate(['/search', query]);
  }
}
