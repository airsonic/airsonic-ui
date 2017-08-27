import { MediaFile } from './media-file.domain';

export interface AlbumsResponse {
  'subsonic-response': {
    status: string,
    version: string,
    albumList: {
      album: Array<Albums>
    }
  };
}

export interface Albums {
  id: string;
  parent: string;
  isDir: boolean;
  title: string;
  album: string;
  artist: string;
  year: string;
  genre: string;
  playCount: number;
  created: string;
}

export interface AlbumResponse {
  'subsonic-response': {
    status: string;
    version: string;
    album: Album;
  };
}

export interface Album {
  id: string;
  name: string;
  artist: string;
  artistId: string;
  coverArt: string;
  songCount: number;
  duration: number;
  created: string;
  year: string;
  genre: string;
  song: Array<MediaFile>;
}

