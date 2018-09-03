import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { ResetModule } from './reset/reset.module';
import { ResetPhoneModule } from './reset-phone/reset-phone.module';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
    },
    {
        path: 'reset',
        loadChildren: './reset/reset.module#ResetModule'
    },
    {
        path: 'reset-phone',
        loadChildren: './reset-phone/reset-phone.module#ResetPhoneModule'
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
