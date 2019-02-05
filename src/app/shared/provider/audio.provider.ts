import { Injectable, InjectionToken } from '@angular/core';

@Injectable()
export abstract class AudioProvider {
  src: string;
  volume: number;
  abstract play();
  abstract pause();
  abstract close();
  abstract onEnded(fn: () => void);
}

@Injectable()
export class WebAudioProvider implements AudioProvider {
  private audioContext = new AudioContext();

  set src(it: string) {
    this.currentTrack.src = it;
  }
  set volume(it: number) {
    this.currentTrack.volume = it;
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

  close() {
    this.currentTrack.load();
    return this.audioContext.close();
  }

  onEnded(fn: () => void) {
    this.currentTrack.addEventListener('ended', () => fn());
  }
}

export let AUDIO_PROVIDER: InjectionToken<AudioProvider> = new InjectionToken<AudioProvider>('AudioProvider');


export const AudioProviderFactory = () => {
  return new WebAudioProvider();
};
