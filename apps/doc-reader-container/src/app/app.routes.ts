import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  // {
  //   path: 'login',

  // }
  {
    path: 'app',
    loadChildren: () =>
      import('doc-reader-app/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
