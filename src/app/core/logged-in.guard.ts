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
  ){
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('token')) {
      return new Observable<boolean>((obs: Observer<boolean>)=>{
        this.authService.checkValidityOfTheToken(localStorage.getItem('token')).subscribe((res)=>{
          if(!res.status){
            localStorage.removeItem('token');
            obs.next(!res.status);
          }else{
            this.router.navigate(['/app']);
            obs.next(!res.status);
          }
        });
      });
    }else {
      return true;
    }
  }
}
