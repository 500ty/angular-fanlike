import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };

    const authData = JSON.parse(
      localStorage.getItem(this.authLocalStorageToken)
    );
    const token = authData.authToken;

    if (token) {
      // headersConfig['Authorization'] = `Token ${token}`;
      headersConfig.Authorization = `Bearer ${token}`;
    }

    const request = req.clone({setHeaders: headersConfig});
    return next.handle(request);
  }
}
