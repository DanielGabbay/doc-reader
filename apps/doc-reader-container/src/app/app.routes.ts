import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'app',
    loadChildren: () =>
      import('doc-reader-app/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/auth/components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
