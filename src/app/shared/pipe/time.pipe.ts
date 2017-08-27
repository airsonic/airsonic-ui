import { Pipe, PipeTransform } from '@angular/core';

/**
 * Convert an integer of seconds into hours:minutes:seconds
 *
 * Example:
 *  {{ 126 | time }}
 *  formats to: 2:06
 *  {{ 3610 | time }}
 *  formats to: 1:00:10
 */
@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value - hours * 3600) / 60);
    const seconds = this.padLeft(value - minutes * 60 - hours * 3600);
    if (hours !== 0) {
      return `${hours}:${this.padLeft(minutes)}:${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  private padLeft(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return value.toString();
  }

}
