import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';
import { Router } from '@angular/router';
import { SideMenuService } from '../shared/service/side-menu.service';
import { MyUser } from '../shared/domain/auth.domain';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  user: MyUser;
  profilMenuOpen = false;
  sideMenuClosed = false;
  collapsed = true;
  query: string;

  constructor(private authService: AuthService,
              private router: Router,
              private sideMenuService: SideMenuService) {}

  ngOnInit() {
    this.user = this.authService.getMyUser();
  }

  logout() {
    this.authService.logoutMyUser();
    this.router.navigateByUrl('/login').then(() => {
      this.closeProfilMenu();
    });
  }

  hasRole(role: string): boolean {
    return this.authService.hasRole(role);
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

  toggleSideMenu() {
    this.sideMenuService.toggleSideMenu.emit();
    this.sideMenuClosed = !this.sideMenuClosed;
  }
}
