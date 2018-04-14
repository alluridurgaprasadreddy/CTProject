import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ApiService } from '../services/api.service';
import { AppSettings } from '../../app.settings';

@Injectable()
export class AuthenticationService {
  public userLoggedIn: boolean = false;

  constructor(private http: Http, private _apiService: ApiService) { }

  login(username: string, password: string) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    const body = {
      'username': username,
      'password': password,
    };

    return this.http.post(AppSettings.LOGIN_API, body, options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        console.log(user);
        if (user && user.token) {
          sessionStorage.setItem('currentUser', user.token);
          sessionStorage.setItem('name', user.name);
          sessionStorage.setItem('mobile_no', user.mobile_no);
          sessionStorage.setItem('email_id', user.email_id);
          this.userLoggedIn = true;
        } else {
          this.userLoggedIn = false;
          console.log("Authentication Fails");
        }

      });
  }

  logout() {
    sessionStorage.clear();
  }

}
