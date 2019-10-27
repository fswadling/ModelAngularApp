import { Directive, Input, HostBinding, HostListener, OnInit, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appIfError]'
})
export class IfErrorDirective implements OnInit, OnDestroy {
  private internalElementClass: string[] = [];
  private statusSubscription: Subscription;

  constructor(
    private control: NgControl) {
  }

  @Input() appIfError: string;

  @Input('class')
  @HostBinding('class')
  get elementClass(): string {
      return this.internalElementClass.join(' ');
  }
  set(val: string) {
      this.internalElementClass = val.split(' ');
  }

  ngOnInit() {
    this.statusSubscription = this.control.statusChanges.subscribe(_ => {
      const index = this.internalElementClass.indexOf(this.appIfError, 0);

      // remove class if it already exists
      if (index > -1) {
        this.internalElementClass.splice(index, 1);
      }

      // add class if formcontrol has error
      if (this.control.errors) {
        this.internalElementClass.push(this.appIfError);
      }
    });
  }

  ngOnDestroy() {
    this.statusSubscription.unsubscribe();
  }
}
