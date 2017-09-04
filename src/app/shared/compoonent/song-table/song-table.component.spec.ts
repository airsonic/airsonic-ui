import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongTableComponent } from './song-table.component';
import { TimePipe } from '../../pipe/time.pipe';
import { StreamServiceSpy } from '../../service/stream.service.spec';
import { StreamService } from '../../service/stream.service';

describe('SongTableComponent', () => {
  let component: SongTableComponent;
  let fixture: ComponentFixture<SongTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongTableComponent, TimePipe ],
      providers: [
        { provide: StreamService, useValue: new StreamServiceSpy() }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
