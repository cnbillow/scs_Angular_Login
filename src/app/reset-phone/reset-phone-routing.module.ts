import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetPhoneComponent } from './reset-phone/reset-phone.component';

const routes: Routes = [
    {
        path: '',
        component: ResetPhoneComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetPhoneRoutingModule { }
