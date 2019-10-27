import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit, OnDestroy {

  constructor() { }

  private onLoadSubject = new Subject<any>();

  data$ = this.onLoadSubject.asObservable();

  onLoad(data) {
    this.onLoadSubject.next(data);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.onLoadSubject.complete();
  }
}
