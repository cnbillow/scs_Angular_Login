import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPhoneRoutingModule } from './reset-phone-routing.module';
import { ResetPhoneComponent } from './reset-phone/reset-phone.component';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ResetPhoneRoutingModule,
      HttpClientModule
  ],
  declarations: [ResetPhoneComponent],
    providers: [
        ApiService
    ]
})
export class ResetPhoneModule { }
