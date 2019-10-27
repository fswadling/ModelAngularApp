import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Project } from 'src/app/models/project';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ExposureListItem } from 'src/app/models/exposure-list-item';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit, OnChanges {

  @Input() project: Project;
  @Input() exposures: ExposureListItem[];

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges() {
    debugger;
    this.formGroup = this.createFormGroup(this.project, this.exposures);
  }

  createFormGroup(project: Project, exposures: ExposureListItem[]) {
    return this.formBuilder.group({
      name: this.formBuilder.control(project.name),
      exposures: this.formBuilder.array(exposures.map(e => this.formBuilder.group(e)))
    });
  }
}
