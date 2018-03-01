export interface MyUser {
  name: string;
  salt: string;
  token: string;
  server: string;
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
export const USER_ROLES = 'user_roles';
export const USER_FOLDERS = 'user_folders';
export const SERVER_URL = 'server_url';
