import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';
import { Router } from '@angular/router';
import { SideMenuService } from '../shared/service/side-menu.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() username: string;
  profilMenuOpen = false;
  sideMenuClosed = false;
  collapsed = true;
  query: string;

  constructor(private authService: AuthService,
              private router: Router,
              private sideMenuService: SideMenuService) {}

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
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

  toggleSideMenu() {
    this.sideMenuService.toggleSideMenu.emit();
    this.sideMenuClosed = !this.sideMenuClosed;
  }
}
