import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  title = 'app';
  position: any = 'start';
  orientation: Boolean = true;
  showNotation: Boolean = true;
  draggable: Boolean = true;
  animation: Boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  playturn
}
