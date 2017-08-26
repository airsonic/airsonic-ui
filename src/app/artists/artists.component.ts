import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../shared/service/artist.service';
import { ArtistIndex } from '../shared/domain/artist.domain';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artistIndex: Array<ArtistIndex>;
  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.artistService.getAll().subscribe(data => {
      this.artistIndex = data['subsonic-response'].artists.index;
    });
  }

}
