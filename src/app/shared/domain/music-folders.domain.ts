export interface MusicFoldersResponse {
  'subsonic-response': {
    status: string,
    version: string,
    musicFolders: {
        musicFolder: Array<MusicFolder>
    };
  };
}

export interface MusicFolder {
  id: string;
  name: string;
}
