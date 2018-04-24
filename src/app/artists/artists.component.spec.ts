import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsComponent } from './artists.component';
import { ArtistService } from '../shared/service/artist.service';
import { ArtistServiceSpy } from '../shared/service/artist.service.spec';

describe('ArtistsComponent', () => {
  let component: ArtistsComponent;
  let fixture: ComponentFixture<ArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistsComponent],
      providers: [
        { provide: ArtistService, useValue: new ArtistServiceSpy() }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
