export interface SearchResponse {
  'subsonic-response': {
    status: string;
    version: string;
    searchResult2: SearchResult2;
  };
}

export interface SearchResult2 {
  artist: Array<ArtistResult>;
  album: Array<AlbumResult>;
  song: Array<SongResult>;
}

export interface ArtistResult {
  id: string;
  name: string;
}

export interface AlbumResult {
  id: string;
  parent: string;
  isDir: boolean;
  title: string;
  album: string;
  artist: string;
  coverArt: string;
  playCount: number;
  created: string;
}

export interface SongResult {
  id: string;
  parent: string;
  title: string;
  album: string;
  artist: string;
  track: number;
  coverArt: string;
  size: number;
  contentType: string;
  suffix: string;
  duration: number;
  bitRate: number;
  path: string;
  isVideo: boolean;
  playCount: number;
  created: string;
  albumId: string;
  artistId: string;
  type: string;
}
