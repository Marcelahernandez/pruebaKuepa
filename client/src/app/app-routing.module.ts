
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLogoutComponent
} from '@nebular/auth';

import { NgxLoginComponent } from './pages/auth-login/login.component';
import { AuthGuard } from './pages/auth/auth-guard.service';
import { NbRegisterComponent } from './pages/register/register.component'
export const routes: Routes = [
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [ 
      {
        path: '',
        component: NgxLoginComponent,
      },
      {
        path: 'login',
        component: NgxLoginComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
    ],
  },
  {
    path: 'pages',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
