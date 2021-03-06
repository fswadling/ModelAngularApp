import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectUpdateService } from 'src/app/services/project-update.service';
import { map, takeUntil, first, skip } from 'rxjs/operators';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { patchSettingChangedPropertiesDirty } from 'src/app/utilities/reactive-forms';
import { ShowErrorsService } from 'src/app/services/show-errors.service';

@Component({
  selector: 'app-project-total-volume',
  templateUrl: './project-total-volume.component.html',
  styleUrls: ['./project-total-volume.component.scss', './../project-form/project-form.component.scss'],
  providers: [ShowErrorsService]
})
export class ProjectTotalVolumeComponent implements OnInit, OnDestroy {

  constructor(private projectUpdateService: ProjectUpdateService, private formBuilder: FormBuilder) { }

  totalVolume$ = this.projectUpdateService.projectFormData$.pipe(map(projectFormData => {
    return projectFormData.exposures
      .map(e => e.volume)
      .reduce((sum, current) => sum + current, 0);
  }));

  projectName$ = this.projectUpdateService.projectFormData$.pipe(
    map(formData => formData.name)
  );

  projectName: FormControl = this.formBuilder.control('', Validators.required);

  unsubscribe$ = new Subject<void>();

  ngOnInit() {
    this.projectName$.pipe(
      first(),
      takeUntil(this.unsubscribe$)
      ).subscribe(value => {
        this.projectName.patchValue(value, { emitEvent: false });
    });

    this.projectName$.pipe(
      skip(1),
      takeUntil(this.unsubscribe$)
      ).subscribe(value => {
        patchSettingChangedPropertiesDirty(this.projectName, value, { emitEvent: false });
    });

    this.projectName.valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(value => {
      this.projectUpdateService.mutate(data => {
        data.name = value;
        return data;
      });
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
