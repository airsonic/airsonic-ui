import { MediaFile } from './media-file.domain';

export interface MusicDirectoryResponse {
  'subsonic-response': {
    status: string;
    version: string;
    directory: MusicDirectory;
  };
}

export interface MusicDirectory {
  id: string;
  parent: string;
  name: string;
  playCount: number;
  child: Array<MediaFile>;
}

export interface MusicFolderResponse {
  'subsonic-response': {
    status: string;
    version: string;
    musicFolders: {
      musicFolder: Array<MusicFolder>
    }};
}

export interface MusicFolder {
  id: string;
  name: string;
}
