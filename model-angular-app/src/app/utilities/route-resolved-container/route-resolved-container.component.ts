import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-route-resolved-container',
  templateUrl: './route-resolved-container.component.html',
  styleUrls: ['./route-resolved-container.component.scss']
})
export class RouteResolvedContainerComponent implements OnInit {
  @Output() resolvedData = new EventEmitter<any>();

  constructor(private actr: ActivatedRoute) { }

  data$ = this.actr.data.pipe(
    first(),
    shareReplay(1));

  ngOnInit() {
    this.data$.subscribe(data => {
      this.resolvedData.next(data);
      this.resolvedData.complete();
    });
  }
}
