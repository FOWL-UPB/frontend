import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog'
import {UserDto} from '../../dto/user.dto';
import { SignUpComponent } from 'src/app/sign-up/sign-up/sign-up.component';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public userDto: UserDto = <UserDto>{};
  
  constructor(private router: Router, public dialog:MatDialog, public api: ApiService) { 
    
  }
  
  //username: string;
  //password: string;

  ngOnInit(): void {

  }
  //login() : void {
  //  if(this.username == 'admin' && this.password == 'admin'){
  //   this.router.navigate(["waiting-room"]);
  //  }else {
  //    alert("Invalid credentials");
   // }
  //}

  signup(): void{
    const alerta= this.dialog.open(SignUpComponent,{width:'300px'});
    alerta.afterClosed().subscribe(result=>{});
  }


  async asdf(){
    try{
      //let respuesta: UserDto = await this.api.getGlobal<UserDto>('/user').toPromise();
      
      let respuesta: {token:string} = await this.api.postGlobal<{token:string}>('/user/signIn',this.userDto).toPromise();
      console.log(respuesta.token);
      localStorage.setItem('jwt',respuesta.token);
      //console.log(respuesta.token);
      //localStorage.setItem('jwt',respuesta.token);  

      if(respuesta){
        this.router.navigate(["create-join"]);
      }else{
        window.alert('Error al ingresar.')
      }
    }catch(err) {
      window.alert('Error al hacer login.')
    }
  }
  
}

