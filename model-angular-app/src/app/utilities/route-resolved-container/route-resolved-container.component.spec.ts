import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteResolvedContainerComponent } from './route-resolved-container.component';

describe('RouteResolvedContainerComponent', () => {
  let component: RouteResolvedContainerComponent;
  let fixture: ComponentFixture<RouteResolvedContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteResolvedContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteResolvedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
