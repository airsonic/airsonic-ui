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
