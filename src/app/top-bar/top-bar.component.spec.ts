import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarComponent } from './top-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { SideMenuService } from '../shared/service/side-menu.service';
import { AuthService } from '../shared/service/auth.service';
import { AuthServiceSpy } from '../shared/service/auth.service.spec';
import { TranslateModule } from '@ngx-translate/core';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBarComponent ],
      providers: [
        { provide: AuthService, useValue: new AuthServiceSpy() },
        SideMenuService
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
