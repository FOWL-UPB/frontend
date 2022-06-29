import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportModule } from '../material-import';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialImportModule ,
    HttpClientModule
  ]
})
export class SignInModule { }
