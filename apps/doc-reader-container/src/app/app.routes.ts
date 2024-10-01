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

// to create .github/workflows/publish.yml:
// sudo touch .github/workflows/publish.yml
// or if the .github or .github/workflows folder is not in the root of the project:

