export interface AlbumsResponse {
  'subsonic-response': {
    status: string,
    version: string,
    albumList: {
      album: Array<Album>
    }
  };
}

export interface Album {
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
