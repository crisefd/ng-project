import { Routes, RouterModule } from '@angular/router';

import { ProjectModule } from './project/project.module';
import { DefaultComponent } from './project/components/default';

const routes: Routes = [

  ...ProjectModule.getRoutes(),
  {
    path: '**',
    component: DefaultComponent
  },
  {
    path: '',
    component: DefaultComponent
  },
];

export const routing = RouterModule.forRoot( routes, { useHash: true } );
