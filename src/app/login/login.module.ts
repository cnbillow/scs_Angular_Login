import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
  ],
  declarations: [
      LoginComponent
  ],
  providers:[
      ApiService,
  ]
})
export class LoginModule { }
