import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterLoadingService } from 'src/app/services/router-loading.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  constructor(
    private actr: ActivatedRoute,
    private routerLoadingService: RouterLoadingService) { }

  data$: Observable<any> = this.actr.data;
  isRouting$ = this.routerLoadingService.isRouting$;

  ngOnInit() {
  }
}
