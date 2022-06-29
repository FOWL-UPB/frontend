import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { userDto} from '../../dto-game-user/user.dto';


@Injectable({
  providedIn: 'root'
})
export class waitingService {
  
  private url ='http://localhost:3000/game'
  private myself;
  public myid;
  private headers = new HttpHeaders;
  private jwth= new  JwtHelperService;
  private token = this.headers.append('Authorization', 'Bearer '+localStorage.getItem('jwt'))

  constructor( private _http : HttpClient) { 
    this.myself = this.jwth.decodeToken(localStorage.getItem('jwt'));
    this.myid = localStorage.getItem('jwt');
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

    if(this.myid == null){
      this.myid='007'
    }
    
  }

  giveMyself(list : userDto[]) {
    list.push(this.myself);
  }

  gimeMeMyrival(list : userDto[], rival : any){
    list.push(rival);
  }

  updateGame(): Observable<any>{
    const body = "{'isWhite': false, 'isReady': true}" 
    this.headers.append('Authorization', 'Bearer '+localStorage.getItem('jwt'));
    return this._http.post(this.url, body,{headers: this.headers});
  }

  saveIdgame(IdGame: string){
    localStorage.removeItem('idGame');
    localStorage.setItem('idGame',IdGame);
  }

}