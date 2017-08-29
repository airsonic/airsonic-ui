import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaControlsComponent } from './media-controls.component';

describe('MediaControlsComponent', () => {
  let component: MediaControlsComponent;
  let fixture: ComponentFixture<MediaControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
