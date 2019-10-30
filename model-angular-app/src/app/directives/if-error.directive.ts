import { Directive, Input, HostBinding, HostListener, OnInit, OnDestroy, Renderer2, ElementRef, DoCheck } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShowErrorsService } from '../services/show-errors.service';

@Directive({
  selector: '[appIfError]'
})
export class IfErrorDirective implements DoCheck {
  @Input() appIfError: string;

  constructor(
    private showErrorService: ShowErrorsService,
    private control: NgControl,
    private renderer: Renderer2,
    private hostElement: ElementRef) {
  }

  ngDoCheck() {
    if (this.control.errors && this.showErrorService.showErrors) {
      this.renderer.addClass(this.hostElement.nativeElement, this.appIfError);
    } else {
      this.renderer.removeClass(this.hostElement.nativeElement, this.appIfError);
    }
  }
}
