import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
import { Exposure } from 'src/app/models/exposure';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  constructor(private actr: ActivatedRoute) { }

  project$: Observable<Project> = this.actr.data.pipe(map(data => data.project));

  ngOnInit() {
  }

}
