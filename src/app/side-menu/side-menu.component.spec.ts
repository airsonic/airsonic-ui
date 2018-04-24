import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuComponent } from './side-menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { SideMenuService } from '../shared/service/side-menu.service';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SideMenuComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        SideMenuService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
