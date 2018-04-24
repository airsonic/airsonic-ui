import { StreamService } from './stream.service';
import { Observable } from 'rxjs/Observable';
import { AudioProvider } from '../provider/audio.provider';
import { MyUser, USER_INFO } from '../domain/auth.domain';
import { MediaFile } from '../domain/media-file.domain';

export class StreamServiceSpy {
  streamFile = jasmine.createSpy('streamFile');
  onStreamStart = jasmine.createSpy('onStreamStart').and.callFake(() => {
    return Observable.of();
  });
}

class TestAudioProvider implements AudioProvider {
  src: string;
  volume: number;
  play = jasmine.createSpy('play');

  pause = jasmine.createSpy('pause');

  onEnded = jasmine.createSpy('onEnded').and.callFake((fn) => this.onEndedFunction = fn);
  onEndedFunction: () => void;
}

const mediaFile: MediaFile = {
  id: '12345',
  parent: '1234',
  title: 'Test Song',
  album: 'Test Album',
  artist: 'Test Artist',
  track: 1,
  coverArt: '1234',
  size: 1.3,
  contentType: 'audio/mpeg',
  suffix: 'mp3',
  duration: 360,
  bitRate: 360,
  path: 'home/audio',
  isVideo: false,
  playCount: 2,
  created: '2017-08-09T03:59:13.000Z',
  albumId: '1234',
  artistId: '1234',
  type: 'music'
};
const mediaFile2: MediaFile = Object.assign({}, mediaFile, { id: 'media-file-2' });
describe('StreamService', () => {
  let streamService: StreamService;
  let audioProvider: TestAudioProvider;
  const myUser: MyUser = {
    name: 'username',
    salt: 'abc123',
    token: 'abc123',
    server: 'localhost',
  };
  beforeEach(() => {
    localStorage.setItem(USER_INFO, JSON.stringify(myUser));
    audioProvider = new TestAudioProvider();
    streamService = new StreamService(audioProvider);
  });

  it('should start streaming on streamFile', done => {
    streamService.onStreamStart(data => {
      expect(data.isPlaying).toBeTruthy();
      expect(data.mediaFile).toBe(mediaFile);
      done();
    });
    streamService.streamFile(mediaFile);
    expect(audioProvider.play).toHaveBeenCalled();
  });

  it('should start streaming first item added to queue', done => {
    streamService.onStreamStart(data => {
      expect(data.isPlaying).toBeTruthy();
      expect(data.mediaFile).toBe(mediaFile);
      done();
    });
    streamService.addToQueue([mediaFile]);
    expect(audioProvider.play).toHaveBeenCalled();
  });

  it('should stream the second file after the first is finished', () => {
    const mediaFiles = [mediaFile, mediaFile2];
    streamService.addToQueue(mediaFiles);
    expect(audioProvider.src).toContain(mediaFile.id);
    audioProvider.onEndedFunction();
    expect(audioProvider.play).toHaveBeenCalledTimes(2);
    expect(audioProvider.src).toContain(mediaFile2.id);
    expect(mediaFiles).toContain(mediaFile, mediaFile2);
  });

  it('should not start stream if another file is streaming', () => {
    streamService.streamFile(mediaFile);
    streamService.addToQueue([mediaFile2]);
    expect(audioProvider.play).toHaveBeenCalledTimes(1);
    expect(audioProvider.src).not.toContain(mediaFile2.id);
  });

  it('should skip to the next song in the queue', () => {
    const mediaFiles = [mediaFile, mediaFile2];
    streamService.addToQueue(mediaFiles);
    expect(audioProvider.src).toContain(mediaFile.id);
    streamService.next();
    expect(audioProvider.play).toHaveBeenCalledTimes(2);
    expect(audioProvider.src).toContain(mediaFile2.id);
  });

  it('should play the previous song', () => {
    const mediaFiles = [mediaFile, mediaFile2];
    streamService.addToQueue(mediaFiles);
    expect(audioProvider.src).toContain(mediaFile.id);
    streamService.next();
    expect(audioProvider.play).toHaveBeenCalledTimes(2);
    expect(audioProvider.src).toContain(mediaFile2.id);
    streamService.previous();
    expect(audioProvider.play).toHaveBeenCalledTimes(3);
    expect(audioProvider.src).toContain(mediaFile.id);
  });
});
