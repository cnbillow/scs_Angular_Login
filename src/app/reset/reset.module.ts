import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetRoutingModule } from './reset-routing.module';
import { ResetComponent } from './reset/reset.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';

@NgModule({
  imports: [
    CommonModule,
    ResetRoutingModule,
      HttpClientModule
  ],
  declarations: [ResetComponent],
    providers: [
        ApiService
    ]
})
export class ResetModule { }
