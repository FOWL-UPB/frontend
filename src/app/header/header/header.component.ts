import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../serviceHeader/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public value = "Jorgen";

  constructor( private _header: HeaderService) { 

  }


  ngOnInit(): void {
    this.value =  this._header.getMyself().userName;
  }

}
