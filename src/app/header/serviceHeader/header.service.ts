import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class HeaderService {

    private myself;
  
    constructor() { }

    getMyself(){
        if (localStorage.getItem('jws') == null){
            this.myself = {
                userName: "Lord Baldomero",
                level:"10/10"
            }
        }else{
            this.myself=localStorage.getItem('jws');
        }

        return this.myself;

    }

  
  
}