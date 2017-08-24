import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists = [];
  constructor() {
    const initialArtists = [{'id': 276, 'name': 'Wallflowers, The', 'coverArt': 'https://en.wikipedia.org/wiki/File:Jakob_Dylan_and_Stuart_Mathis.jpg', 'albumCount': 1}, {'id': 277, 'name': 'Weakerthans, The', 'coverArt': 'https://en.wikipedia.org/wiki/File:The_Weakerthans_in_Winnipeg.jpg', 'albumCount': 1}];
    const inter = [];
    for (let i = 0; i < 25; i++) {
      console.log(initialArtists[0]);
      inter.push(initialArtists[0]);
      inter.push(initialArtists[1]);
    }
    console.log(inter);
    this.artists = inter;
  }

  ngOnInit() {

  }

}
