import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../shared/service/side-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  sideMenuClosed = false;

  constructor(private sideMenuService: SideMenuService) { }

  ngOnInit() {
    this.sideMenuService.toggleSideMenu.subscribe(() => {
      this.sideMenuClosed = !this.sideMenuClosed;
    });
  }

}
