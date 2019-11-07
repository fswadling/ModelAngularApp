import { Component, Input, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProjectUpdateService } from 'src/app/services/project-update.service';
import { ShowErrorsService } from 'src/app/services/show-errors.service';
import { ProjectFormData } from 'src/app/models/project-form-data';
import { patchSettingChangedPropertiesDirty } from 'src/app/utilities/reactive-forms';
import { CreateProjectFormService } from 'src/app/services/create-project-form.service';

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
    private creatProjectFormService: CreateProjectFormService,
    private projectUpdateService: ProjectUpdateService) { }

  ngOnInit() {
    this.formGroup = this.creatProjectFormService.createFormGroup(this.projectFormData);
    this.valueChangesSubscription = this.setupUpdateService(this.formGroup);
  }

  ngOnChanges() {
    if (this.formGroup) {
      patchSettingChangedPropertiesDirty(this.formGroup, this.projectFormData, { emitEvent: false });
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
}
