import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { AuthService } from './auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('token')) {
      console.log('Parece que ya estabas aqui');
      
      return new Observable<boolean>((obs: Observer<boolean>)=>{
        console.log('Estoy preguntado al servidor para validar token');
        this.authService.checkValidityOfTheToken(localStorage.getItem('token')).subscribe(
          (response)=>{
            console.log('Respuesta del servidor: ',response);
            if(response.status==200){
              console.log('Bienvenido de vuelta');
              this.router.navigate(['/app']);
              obs.next(false);
            }else{
              console.log('Tu sesion ha expirado');
              localStorage.removeItem('token');
              obs.next(true);
            }
          },(error)=>{
            console.log('El servidor no responde, verifica tu conexion a internet');
            obs.next(false);
          });
      });
    }else {
      console.log('Inicia sesion');
      return true;
    }
  }
}
