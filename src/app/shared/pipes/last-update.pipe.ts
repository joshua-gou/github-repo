import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastUpdate'
})
export class LastUpdatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const date = new Date(value);
    const now = new Date();
    const hoursElapsed = Math.round((now.getTime() - date.getTime()) / (1000 * 3600));

    if (hoursElapsed === 0) {
      return 'Updated just now';
    } else if (hoursElapsed < 24) {
      return `Updated ${hoursElapsed} hours ago`;
    } else if (24 <= hoursElapsed && hoursElapsed < 48) {
      return 'Updated yesterday';
    } else {
      const daysElapsed = Math.round(hoursElapsed / 24);
      return `Updated ${daysElapsed} days ago`;
    }
  }

}
