import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/service/user.service';
import { Router } from '@angular/router';
import { SideMenuService } from './shared/service/side-menu.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  username: string;
  sideMenuClosed = false;

  constructor(private userService: UserService,
              private router: Router,
              private sideMenuService: SideMenuService,
              private translate: TranslateService) {
                translate.setDefaultLang('en');
                translate.use(translate.getBrowserCultureLang());
              }

  ngOnInit() {
    if (!this.userService.hasUser()) {
      this.router.navigateByUrl('/login');
    } else {
      this.username = this.userService.getUser().name;
    }

    this.sideMenuService.toggleSideMenu.subscribe(() => {
      this.sideMenuClosed = !this.sideMenuClosed;
    });
  }
}

// export const USER_LANGUAGE = 'user_language';
