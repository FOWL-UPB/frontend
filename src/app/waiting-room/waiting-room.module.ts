import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaitingRoomComponent } from './waiting-room/waiting-room.component';
import { MaterialModule } from './waiting-room/material.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [WaitingRoomComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HeaderModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class WaitingRoomModule { }
