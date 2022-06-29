import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';

import { MaterialImportModule } from '../material-import';
import { FormsModule } from '@angular/forms';
import { ChessboardModule } from '../chessboard/chessboard.module';

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    MaterialImportModule,
    FormsModule,
    ChessboardModule
  ]
})
export class GameModule { }
