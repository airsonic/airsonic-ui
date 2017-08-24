import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOpen = false;
  collapsed = true;

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
  }
}
