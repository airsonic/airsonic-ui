export interface UsersResponse {
  'subsonic-response': {
    status: string;
    version: string;
    user: Array<User>;
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
  playlistRole: boolean;
  coverArtRole: boolean;
  commentRole: boolean;
  podcastRole: boolean;
  streamRole: boolean;
  jukeboxRole: boolean;
  shareRole: boolean;
  folders: Folder;
}

export interface Folder {
  id: string;
}
