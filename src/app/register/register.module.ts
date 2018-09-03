import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    HttpClientModule
  ],
  declarations: [
      RegisterComponent,
  ],
  providers:[
      ApiService,
  ]
})
export class RegisterModule { }
