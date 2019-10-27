import { Directive, Input, HostBinding, OnInit, DoCheck, Renderer2, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appIfDirty]'
})
export class IfDirtyDirective implements DoCheck {
  @Input() appIfDirty: string;

  constructor(
    private control: NgControl,
    private renderer: Renderer2,
    private hostElement: ElementRef) {
  }

  ngDoCheck() {
    if (this.control.dirty) {
      this.renderer.addClass(this.hostElement.nativeElement, this.appIfDirty);
    }
  }
}
