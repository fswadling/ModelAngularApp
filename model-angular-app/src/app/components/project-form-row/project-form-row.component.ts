import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: '[formGroup] app-project-form-row, [formGroupName] app-project-form-row',
  templateUrl: './project-form-row.component.html',
  styleUrls: ['./project-form-row.component.scss']
})
export class ProjectFormRowComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {
    this.formGroup = this.controlContainer.control as FormGroup;
  }
}
