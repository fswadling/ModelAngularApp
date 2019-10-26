import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Exposure } from 'src/app/models/exposure';
import { FormGroup, FormBuilder, ControlContainer } from '@angular/forms';

@Component({
  selector: '[formGroup] app-project-form-row, [formGroupName] app-project-form-row',
  templateUrl: './project-form-row.component.html',
  styleUrls: ['./project-form-row.component.scss']
})
export class ProjectFormRowComponent implements OnInit, OnChanges {
  formGroup: FormGroup;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {
    this.formGroup = this.controlContainer.control as FormGroup;
  }

  ngOnChanges() {

  }

}
