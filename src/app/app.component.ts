import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/service/auth.service';
import { UsersService } from './shared/service/users.service';
import { SideMenuService } from './shared/service/side-menu.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sideMenuClosed = false;

  constructor(private authService: AuthService,
              private usersService: UsersService,
              private sideMenuService: SideMenuService,
              private translate: TranslateService) {
                this.translate.setDefaultLang('en');
                this.translate.use(this.translate.getBrowserCultureLang());
              }

  ngOnInit() {
    this.sideMenuService.toggleSideMenu.subscribe(() => {
      this.sideMenuClosed = !this.sideMenuClosed;
    });
  }
}
