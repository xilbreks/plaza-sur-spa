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
    
    this.authService.logIn(username.value, password.value).subscribe((res)=>{
      this.signInLoading = false;
      if(res.status){
        console.log(res.msg);
        localStorage.setItem('token',res.result);
        this.router.navigate(['./app']);
      }else{
        console.log(res.msg);
        this.error = true;
        this.message = res.msg; 
        password.value = '' ;
      }
    },(res)=>{
      this.signInLoading = false;
      this.error = true;
      this.message = 'No se pudo conectar al servidor de Steam';
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
