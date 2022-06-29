import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDto } from '../../dto/user.dto';
import { ApiService } from '../../api/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public myForm: FormGroup = <FormGroup>{};
  public userDto: UserDto = <UserDto>{};
  public esModificar= false;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    public api: ApiService,
   public dialogRef: MatDialogRef<SignUpComponent>,
   @Inject(MAT_DIALOG_DATA) public data: UserDto


  ) { }
  

  ngOnInit(): void {
 

  }
  

  
  async registrarUsuario() {
    try{
      let respuesta: {token:string} = await this.api.postGlobal<{token:string}>('/user/signUp',this.userDto).toPromise();

      console.log(respuesta.token);
      localStorage.setItem('jwt',respuesta.token);  
      //console.log(localStorage.getItem('jwt'));
      
      if(respuesta){
        this.dialogRef.close();
        window.alert('El usuario fue registrado')
        this.router.navigate(["create-join"]);
      }else{
        window.alert('Error al registrar los datos.')
      }
    }catch(err) {
      window.alert('Error al registrar los datos.')
    }
  }

}
