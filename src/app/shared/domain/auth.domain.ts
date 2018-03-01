export interface MyUser {
  name: string;
  email: string;
  salt: string;
  token: string;
  server: string;
  roles: MyRoles;
  folder: Array<number>;
}

export interface MyRoles {
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
  videoConversionRole: boolean;
}

export const USER_INFO = 'user_info';
export const SERVER_URL = 'server_url';
