import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MaterialImportModule } from '../material-import';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialImportModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports:[
    MatDialogModule
  ]
})
export class SignUpModule { }
