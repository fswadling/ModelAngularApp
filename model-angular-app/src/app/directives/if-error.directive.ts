import { Directive, Input, HostBinding, HostListener, OnInit, OnDestroy, Renderer2, ElementRef, DoCheck } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appIfError]'
})
export class IfErrorDirective implements DoCheck {
  @Input() appIfError: string;

  constructor(
    private control: NgControl,
    private renderer: Renderer2,
    private hostElement: ElementRef) {
  }

  ngDoCheck() {
    if (this.control.errors) {
      this.renderer.addClass(this.hostElement.nativeElement, this.appIfError);
    } else {
      this.renderer.removeClass(this.hostElement.nativeElement, this.appIfError);
    }
  }
}
