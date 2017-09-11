
import { Injectable, InjectionToken } from '@angular/core';

@Injectable()
export abstract class AudioProvider {
  src: string;
  abstract play();
  abstract pause();
  abstract onEnded(fn: () => void);
}

@Injectable()
export class WebAudioProvider implements AudioProvider {
  set src(it: string) {
    this.currentTrack.src = it;
  }
  private currentTrack;
  constructor() {
    this.currentTrack = new Audio();
  }

  play() {
    this.currentTrack.play();
  }

  pause() {
    this.currentTrack.pause();
  }

  onEnded(fn: () => void) {
    this.currentTrack.addEventListener('ended', () => fn());
  }
}

export let AUDIO_PROVIDER: InjectionToken<AudioProvider> = new InjectionToken<AudioProvider>('AudioProvider');


export const AudioProviderFactory = () => {
  return new WebAudioProvider();
};
