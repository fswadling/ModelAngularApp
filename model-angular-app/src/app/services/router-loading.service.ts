import { Injectable } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { filter, map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterLoadingService {

  constructor(private router: Router) { }

  isRouting$ = this.router.events.pipe(
    map(routerEvent => {
      return {
      isStart: routerEvent instanceof NavigationStart,
      isEnd: routerEvent instanceof NavigationEnd,
    };
    }),
    filter(tuple => tuple.isStart || tuple.isEnd),
    map(tuple => {
      if (tuple.isStart) {
        return true;
      }
      return false;
    }),
    shareReplay(1)
  );
}
