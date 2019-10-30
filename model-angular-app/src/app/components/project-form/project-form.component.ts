import { Component, Input, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { Project } from 'src/app/models/project';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExposureListItem } from 'src/app/models/exposure-list-item';
import { ExposureVolumesGreaterThanOrEqualToMinimumVolume } from './utilities/validators';
import { Subscription } from 'rxjs';
import { ProjectUpdateService } from 'src/app/services/project-update.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit, OnDestroy {

  @Input() project: Project;
  @Input() exposures: ExposureListItem[];

  formGroup: FormGroup;
  private valueChangesSubscription: Subscription = undefined;

  constructor(
    private formBuilder: FormBuilder,
    private projectUpdateService: ProjectUpdateService) { }

  ngOnInit() {
    this.formGroup = this.createFormGroup(this.project, this.exposures);
    this.valueChangesSubscription = this.setupUpdateService(this.formGroup);
  }

  ngOnDestroy() {
    this.valueChangesSubscription.unsubscribe();
  }

  private pushValueChangeToUpdateService(value) {
    const exposures = value as ExposureListItem[];
    this.projectUpdateService.update(exposures);
  }

  private setupUpdateService(formGroup: FormGroup): Subscription {
    return formGroup.controls.exposures.valueChanges.subscribe(value => this.pushValueChangeToUpdateService(value));
  }

  createFormGroup(project: Project, exposures: ExposureListItem[]) {
    return this.formBuilder.group({
      name: [project.name, Validators.required],
      minimumVolume: [project.minimumVolume, Validators.required],
      exposures: this.formBuilder.array(exposures.map(e => this.formBuilder.group({
        id: e.id,
        volume: [e.volume, Validators.required]
      })))
    },
    {
      validators: [
        ExposureVolumesGreaterThanOrEqualToMinimumVolume
      ]
    });
  }
}
