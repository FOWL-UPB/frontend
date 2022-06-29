import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TableService } from '../borrarServicio/table-service';
import { tableDto } from '../dto-create-join/table.dto';

import { tableDataSource } from './table_dataSource';

@Component({
  selector: 'app-create-join',
  templateUrl: './create-join.component.html',
  styleUrls: ['./create-join.component.scss']
})
export class CreateJoinComponent implements OnInit {

  public elementsTable : tableDto[]=[];
  public dataSource : tableDataSource;
  public displayedColumns = ['name','date','pg_pj','level']
  public id = '';
  public _form: FormGroup

  
  /*---------------borrar y remplezar este tableService------------------*/
  constructor(private _tableService : TableService, private route: Router) {

    this._tableService.makeProvitionalTable(this.elementsTable);
    this.dataSource = new tableDataSource(this.elementsTable);    

   }

  ngOnInit(): void {

  }

  onClickId(){
    this.joinWithId(this.id)
  }

  

  async joinWithId(IdGame : string){
    this._tableService.joinGame(IdGame).subscribe(data =>{
      this._tableService.saveIdgame(data.idGame);
    });
  }

  onClickCreateWaiting() {
   this.createWait();
  }

  async createWait() {
    this._tableService.createGame('{ "isMultiplayer": true }').subscribe(data =>{
      this._tableService.saveIdgame(data.idGame);
    });
  }




}
