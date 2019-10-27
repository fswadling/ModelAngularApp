import { Injectable } from '@angular/core';
import { ExposureListItem } from '../models/exposure-list-item';
import { timer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExposureService {
  getExposures(projectId: number): Observable<ExposureListItem[]> {
    return timer(2000).pipe(map(_ => {
      return [
        {
          id: 0,
          volume: 2000
        },
        {
          id: 1,
          volume: 5000
        }
      ];
    }));
  }

  constructor() { }
}
