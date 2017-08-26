export interface ArtistsResponse {
  'subsonic-response': {
    status: string,
    version: string,
    artists: {
      ignoredArticles: string,
      index: Array<ArtistIndex>
    }
  };
}

export interface ArtistIndex {
  name: string;
  artist: Array<Artist>;
}

export interface Artist {
  id: string;
  name: string;
  coverArt: string;
  albumCount: string;
}
