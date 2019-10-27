import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectSelectionComponent } from './components/project-selection/project-selection.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectFormRowComponent } from './components/project-form-row/project-form-row.component';
import { IfErrorDirective } from './directives/if-error.directive';
import { IfDirtyDirective } from './directives/if-dirty.directive';
import { ProjectFormErrorsPipe } from './pipes/project-form-errors.pipe';
import { ExposureComponent } from './components/exposure/exposure.component';
import { ExposureFormComponent } from './components/exposure-form/exposure-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectSelectionComponent,
    ProjectPageComponent,
    ProjectFormComponent,
    ProjectFormRowComponent,
    IfErrorDirective,
    IfDirtyDirective,
    ProjectFormErrorsPipe,
    ExposureComponent,
    ExposureFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
