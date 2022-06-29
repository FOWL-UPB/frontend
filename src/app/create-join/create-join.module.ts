import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateJoinComponent } from './create-join/create-join.component';
import { MaterialModule } from './material.modules'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [CreateJoinComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HeaderModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[CreateJoinComponent]
})
export class CreateJoinModule { }
