import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './service/authentication.service';

// import the auth service here
// import { AuthService } from '../core/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  // add the service we need
  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/images']);
      return false;
    }
    return true;
  }

}
