import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectSelectionComponent } from './components/project-selection/project-selection.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { ProjectResolver } from './resolvers/project-resolver';
import { ExposuresListResolver } from './resolvers/exposures-list-resolver';

const routes: Routes = [
  {
    path: '',
    component: ProjectSelectionComponent
  },
  {
    path: 'project/:projectId',
    component: ProjectPageComponent,
    resolve: {
      project: ProjectResolver,
      exposures: ExposuresListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
