import { Component, OnInit } from '@angular/core';
import { ShowErrorsService } from 'src/app/services/show-errors.service';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.scss']
})
export class ShowErrorsComponent implements OnInit {

  constructor(private showErrorsService: ShowErrorsService) { }

  ngOnInit() {
  }

  get showErrors() {
    return this.showErrorsService.showErrors;
  }

  set showErrors(value: boolean) {
    this.showErrorsService.showErrors = value;
  }
}
