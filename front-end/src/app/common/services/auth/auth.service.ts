import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UiService } from '../ui-service/ui.service';
import { apiUrl } from '../../constants/api.constant';
import { ILoginRes } from '../../interfaces/ILoginResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private uiService: UiService
  ) { }

  logout() {
    localStorage.removeItem('tokenADMIN');
    localStorage.removeItem('userADMIN');
    this.router.navigate(['/account']);
  }

  register(body) {
    this.uiService.isLoading.next(true);
    this.http.post(`${apiUrl}/patients/register`, body).subscribe((res: any) => {
      const loginBody = {
        emailOrPhone: res.email,
        password: res.password
      };
      this.login(loginBody).subscribe(() => {
        this.router.navigate(['user/home']);
        this.uiService.isLoading.next(false);
      });
      this.uiService.isLoading.next(false);
      this.uiService.openSnackBar('general.registeredSuccessfully', '', 'success');
    });
  }

  login(body) {
    this.uiService.isLoading.next(true);
    return this.http.post(`${apiUrl}/users/login`, body).pipe(
      tap((res: ILoginRes) => {
        if (res.success) {
          this.user = res.user;
          localStorage.setItem('tokenADMIN', res.token);
          const user = JSON.stringify(res.user);
          localStorage.setItem('userADMIN', user);
        }
      })
    );
  }

  getUser() {
    return localStorage.getItem('userADMIN');
  }

  getToken() {
    return localStorage.getItem('tokenADMIN');
  }

  get isAuthenticated() {
    return localStorage.getItem('tokenADMIN') !== null;
  }
}
