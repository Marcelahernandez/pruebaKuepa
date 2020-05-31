import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxLoginComponent } from '../auth-login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        component: NgxLoginComponent, // <---
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {

}