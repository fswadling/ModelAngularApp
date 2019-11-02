import { Component, Input, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExposureVolumesGreaterThanOrEqualToMinimumVolume } from './utilities/validators';
import { Subscription } from 'rxjs';
import { ProjectUpdateService } from 'src/app/services/project-update.service';
import { ShowErrorsService } from 'src/app/services/show-errors.service';
import { ProjectFormData } from 'src/app/models/project-form-data';
import { setChangedControlsAsDirty } from 'src/app/utilities/reactive-forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
  providers: [ShowErrorsService]
})
export class ProjectFormComponent implements OnInit, OnChanges, OnDestroy {

  @Input() projectFormData: ProjectFormData;

  formGroup: FormGroup;
  private valueChangesSubscription: Subscription = undefined;

  constructor(
    private formBuilder: FormBuilder,
    private projectUpdateService: ProjectUpdateService) { }

  ngOnInit() {
    this.formGroup = this.createFormGroup(this.projectFormData);
    this.valueChangesSubscription = this.setupUpdateService(this.formGroup);
  }

  ngOnChanges() {
    if (this.formGroup) {
      const oldValue = this.formGroup.value;
      this.formGroup.patchValue(this.projectFormData, { emitEvent: false });
      setChangedControlsAsDirty(this.formGroup, oldValue);
    }
  }

  ngOnDestroy() {
    this.valueChangesSubscription.unsubscribe();
  }

  private setupUpdateService(formGroup: FormGroup): Subscription {
    return formGroup.valueChanges.subscribe(value => {
      this.projectUpdateService.update(value);
    });
  }

  createFormGroup(projectFormData: ProjectFormData) {
    return this.formBuilder.group({
      name: [projectFormData.name, Validators.required],
      minimumVolume: [projectFormData.minimumVolume, Validators.required],
      exposures: this.formBuilder.array(projectFormData.exposures.map(e => this.formBuilder.group({
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
