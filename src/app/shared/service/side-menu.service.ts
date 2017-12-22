import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SideMenuService {
  public toggleSideMenu: EventEmitter<any> = new EventEmitter();

  constructor() { }

}
