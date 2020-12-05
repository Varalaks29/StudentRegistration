import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrackingInfoRoutingModule } from './tracking-info-routing.module';
// import { TrackingInfoComponent } from './tracking-info.component';

@NgModule({
  declarations: [
    // TrackingInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TrackingInfoRoutingModule
  ]
})
export class TrackingInfoModule { }
