import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  opened = false;
  showAlbums = false;

  _toggleSidebar() {
    this.opened = !this.opened;
  }

  showSidebar() {
    this.opened = true;
  }

  hideSidebar() {
    this.opened = false;
  }

  toggleShowAlbums() {
    // this.showAlbums = !this.showAlbums;
  }
}
