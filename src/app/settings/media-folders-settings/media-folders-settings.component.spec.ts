import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFoldersSettingsComponent } from './media-folders-settings.component';

describe('MediaFoldersSettingsComponent', () => {
  let component: MediaFoldersSettingsComponent;
  let fixture: ComponentFixture<MediaFoldersSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaFoldersSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFoldersSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
