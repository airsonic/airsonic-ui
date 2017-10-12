import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaControlsComponent } from './media-controls.component';
import { StreamService } from '../../service/stream.service';
import { StreamServiceSpy } from '../../service/stream.service.spec';
import { FormsModule } from '@angular/forms';

describe('MediaControlsComponent', () => {
  let component: MediaControlsComponent;
  let fixture: ComponentFixture<MediaControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaControlsComponent ],
      providers: [
        { provide: StreamService, useValue: new StreamServiceSpy() }
      ],
      imports: [ FormsModule ]
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
