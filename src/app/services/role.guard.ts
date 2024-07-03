/*import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRoles = route.data['roles'] as Array<string>;
    const userRoles = this.authService.getUserRoles();

    if (!this.authService.isLoggedIn() || !expectedRoles.some(role => userRoles.includes(role))) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

*/



/*import { CanActivateFn } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  return true;
};*/
