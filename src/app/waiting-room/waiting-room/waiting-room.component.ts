import { Component, OnInit } from '@angular/core';
import { waitingService } from '../borrar-waiting/waiting.service';
import { userDto } from '../../dto-game-user/user.dto';

import { waitingDataSource } from './waiting.datasource';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.scss']
})
export class WaitingRoomComponent implements OnInit {

  public elementWaiting : userDto[]=[];
  public dataSource : waitingDataSource;
  public displayedColumns=['userName', 'level'];
  public id;
  

/*---------------------remplazar waitinfService---------------*/
  constructor(private _waitingService : waitingService) {
    this._waitingService.giveMyself(this.elementWaiting);
    this.dataSource =  new waitingDataSource(this.elementWaiting);
    this.id=this._waitingService.myid
   }

  ngOnInit(): void {
  }

  async upDate(){
    this._waitingService.updateGame().subscribe(data =>{
      this._waitingService.saveIdgame(data.idGame);
    })
  }


}
