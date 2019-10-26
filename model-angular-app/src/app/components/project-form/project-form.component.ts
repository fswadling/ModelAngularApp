import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Project } from 'src/app/models/project';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit, OnChanges {

  @Input() project: Project;

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.formGroup = this.createFormGroup(this.project);
  }

  createFormGroup(project: Project) {
    return this.formBuilder.group({
      name: this.formBuilder.control(project.name),
      exposures: this.formBuilder.array(project.exposures)
    });
  }

}
