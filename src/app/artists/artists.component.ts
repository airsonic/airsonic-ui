import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists = [];
  constructor() {
    const initialArtists = [{'id': 276, 'name': 'Wallflowers, The', 'coverArt': null, 'albumCount': 1}, {'id': 277, 'name': 'Weakerthans, The', 'coverArt': null, 'albumCount': 1}];
    const inter = [];
    for (let i = 0; i < 25; i++) {
      this.artists.push(initialArtists[0]);
      this.artists.push(initialArtists[1]);
    }
  }

  ngOnInit() {

  }

}
