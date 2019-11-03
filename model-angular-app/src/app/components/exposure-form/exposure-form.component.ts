import { Component, Input, OnChanges } from '@angular/core';
import { Exposure } from 'src/app/models/exposure';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-exposure-form',
  templateUrl: './exposure-form.component.html',
  styleUrls: ['./exposure-form.component.scss', './../project-form/project-form.component.scss']
})
export class ExposureFormComponent implements OnChanges {

  @Input() exposure: Exposure;
  constructor(private formBuilder: FormBuilder) { }

  formGroup: FormGroup;

  ngOnChanges() {
    this.formGroup = this.createFormGroup(this.exposure);
  }

  private createFormGroup(exposure: Exposure) {
    return this.formBuilder.group({
      volume: exposure.volume,
      additionalVolumes: this.formBuilder.array(
        exposure.additionalVolumes.map(addvol => this.formBuilder.group({
          volume: this.formBuilder.control(addvol.volume, Validators.required)
        }))
      )
    });
  }

}
