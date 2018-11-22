import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
apiUrl = '/';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  forgotPassword(email) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'hotlab/forgetPassword', email,{
        headers: new HttpHeaders().set('Content-Type', 'application/json')
       }).subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  forgotPasswordEmail(email) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'hotlab/forgetPassword', email,{
        headers: new HttpHeaders().set('Content-Type', 'application/json')
       }).subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getToken(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'security/auth', JSON.stringify(data),{
        headers: new HttpHeaders().set('Content-Type', 'application/json')
       }).subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  login(data,token) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'hot/login', JSON.stringify(data),{
        headers: new HttpHeaders().set('Authorization', token)
                .append('Accept', 'application/json;odata=verbose')
                .append('Content-Type','application/json')
       }).subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }



}
