import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { gameDto } from 'src/app/dto-game-user/game.dto';
import { userDto } from 'src/app/dto-game-user/user.dto';
import { tableDto } from '../dto-create-join/table.dto';


@Injectable({
  providedIn: 'root'
})
export class TableService {

  private url ='http://localhost:3000/game'
  private myself;
  private headers = new HttpHeaders;
  private jwth= new  JwtHelperService;
  private token = this.headers.append('Authorization', 'Bearer '+localStorage.getItem('jwt'))

  constructor( private _http : HttpClient) { 
    this.myself = this.jwth.decodeToken(localStorage.getItem('jwt'));
    if(this.myself==null){
      const lb: userDto={
        idUser: '676',
        userName: "Lord Baldomero",
        profileUrl: "nose",
        theme: 'sera',
        ads: true,
        email: 'lordbaldomero@gmail.com',
        password: 'baldomerorules',
        level: [{ played: 100, won: 98 }]
      };
      this.myself = lb;
    }
  }

  makeProvitionalTable(list : tableDto[]) {
    const dto: tableDto ={
      name: 'Elias',
      date: '14:00',
      pg_pj: '20/5',
      level: '3.5',
      idGame: '12345'
    };
    list.push(dto);
  }

  joinGame(IdGame : string) : Observable<any>{
    this.headers.append('Authorization', 'Bearer '+localStorage.getItem('jwt'));
    return this._http.put(this.url+'/'+IdGame,{headers:this.headers});
  }

  saveIdgame(IdGame: string){
    localStorage.removeItem('idGame');
    localStorage.setItem('idGame',IdGame);
  }

  createGame(body : string): Observable<any>{
    this.headers.append('Authorization', 'Bearer '+localStorage.getItem('jwt'));
    return this._http.post(this.url, body,{headers: this.headers});
  }




}