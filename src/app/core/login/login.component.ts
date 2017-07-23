import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  signInLoading: boolean = false;
  message: string = '';
  error: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement): boolean{
    this.signInLoading = true;
    this.error = false;
    this.message = '';
    console.log('Preguntado al servidor para validar credenciales');
    this.authService.logIn(username.value, password.value).subscribe(
      (response)=>{
        this.signInLoading = false;
        if(response.status==200){
          console.log('Credenciales correctas');
          localStorage.setItem('token',response.result);
          this.router.navigate(['./app']);
        }else{
          console.log('Credenciales incorrectas',response);
          this.error = true;
          this.message = response.msg; 
          password.value = '' ;
        }
      },(error)=>{
        this.signInLoading = false;
        this.error = true;
        this.message = 'No se pudo conectar al servidor, verifica tu conexion a internet';
        password.value = '' ;
      });
    return false;
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    document.getElementsByName('username')[0].focus();
  }
}
