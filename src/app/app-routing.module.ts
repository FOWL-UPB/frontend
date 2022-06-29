import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJoinComponent } from './create-join/create-join/create-join.component';
import { GameComponent } from './game/game/game.component';
import { SignInComponent } from './sign-in/sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up/sign-up.component';
import { WaitingRoomComponent } from './waiting-room/waiting-room/waiting-room.component';

const routes: Routes = [
  { path: '',   redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'create-join', component: CreateJoinComponent },
  { path: 'waiting-room', component: WaitingRoomComponent },
  { path: 'game', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
