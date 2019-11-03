import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectSelectionComponent } from './components/project-selection/project-selection.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { ProjectResolver } from './resolvers/project-resolver';
import { ExposuresListResolver } from './resolvers/exposures-list-resolver';
import { ExposureComponent } from './components/exposure/exposure.component';
import { ExposureResolver } from './resolvers/exposure-resolver.';

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
    },
    children: [
      {
        path: 'exposure/:exposureId',
        // outlet: 'exposure-details',
        component: ExposureComponent,
        resolve: {
          exposure: ExposureResolver
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
