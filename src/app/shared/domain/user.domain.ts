export interface UserResponse {
  'subsonic-response': {
    status: string;
    version: string;
    user: User;
  };
}

export interface User {
  username: string;
  email: string;
  scrobblingEnabled: boolean;
  adminRole: boolean;
  settingsRole: boolean;
  downloadRole: boolean;
  uploadRole: boolean;
  maxBitRate: number;
  playlistRole: boolean;
  coverArtRole: boolean;
  commentRole: boolean;
  podcastRole: boolean;
  streamRole: boolean;
  jukeboxRole: boolean;
  shareRole: boolean;
  videoConversionRole: boolean;
  folder: Array<number>;
}
