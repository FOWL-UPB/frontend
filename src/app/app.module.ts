import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateJoinModule } from './create-join/create-join.module';
import { GameModule } from './game/game.module';
import { SignInModule } from './sign-in/sign-in.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { WaitingRoomModule } from './waiting-room/waiting-room.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { HeaderModule } from './header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
=======
import { MaterialImportModule } from './material-import';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChessboardModule } from './chessboard/chessboard.module';


>>>>>>> 6fec1a6626677549ffaae9c11790bdb8aa3c02ae

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignInModule,
    SignUpModule,
    CreateJoinModule,
    WaitingRoomModule,
    GameModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    HeaderModule,
    HttpClientModule,
    ReactiveFormsModule
=======
    MaterialImportModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChessboardModule
>>>>>>> 6fec1a6626677549ffaae9c11790bdb8aa3c02ae
  ],
  exports: [
    MaterialImportModule,
    ChessboardModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
