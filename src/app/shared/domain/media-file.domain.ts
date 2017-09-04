
export interface MediaFile {
  id: string;
  parent: string;
  title: string;
  album: string;
  artist: string;
  track: number;
  year?: number;
  genre?: string;
  coverArt: string;
  size: number;
  contentType: string;
  suffix: string;
  transcodedContentType?: string;
  transcodedSuffix?: string;
  duration: number;
  bitRate: number;
  path: string;
  isVideo: boolean;
  playCount: number;
  discNumber?: number;
  created: string;
  albumId: string;
  artistId: string;
  type: string;
}
