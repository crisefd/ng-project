import { Routes, RouterModule } from '@angular/router';

import { ProjectModule } from './project/project.module';
import { DefaultComponent } from './project/components/default';

const routes: Routes = [
  // {
  //     path: '',
  //     children: [
  //         {
  //             path: '',
  //             component: DefaultComponent
  //         },
  //         ...ProjectModule.getRoutes(),
  //     ]
  // }
  {
    path: '',
    component: DefaultComponent
  },
  ...ProjectModule.getRoutes(),
];

export const routing = RouterModule.forRoot( routes, { useHash: true } );
