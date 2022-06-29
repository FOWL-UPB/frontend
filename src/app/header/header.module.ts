import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './header/material.modules';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent],
  exports:[HeaderComponent],
  imports: [
    CommonModule,MaterialModule,FormsModule
  ]
})
export class HeaderModule { }
