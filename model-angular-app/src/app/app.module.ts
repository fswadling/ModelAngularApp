import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectSelectionComponent } from './components/project-selection/project-selection.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectFormComponent } from './components/project-form/project-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectSelectionComponent,
    ProjectPageComponent,
    ProjectFormComponent
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
