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

  refreshToken(token) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'security/refresh',{
        headers: new HttpHeaders().set('Authorization', token)
                .append('Accept', 'application/json;odata=verbose')
                .append('Content-Type','application/json')
       }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  trackRec(token) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'hot/requirement/trackRec',{
        headers: new HttpHeaders().set('Authorization', token)
                .append('Accept', 'application/json;odata=verbose')
                .append('Content-Type','application/json')
       }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  trackTS(token) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'hot/requirement/trackTS',{
        headers: new HttpHeaders().set('Authorization', token)
                .append('Accept', 'application/json;odata=verbose')
                .append('Content-Type','application/json')
       }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });  
  }

  getRequirementStatics(data,token) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'hot/getRequirementStatics', JSON.stringify(data),{
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

  getDashBoardCounts(data,token) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'hot/getDashBoardCounts', JSON.stringify(data),{
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

  users(token) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'hot/users',{
        headers: new HttpHeaders().set('Authorization', token)
                .append('Accept', 'application/json;odata=verbose')
                .append('Content-Type','application/json')
       }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  vpOfSales(id,token) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'hot/requirement/displayalltechrec/'+id+'/VpOfSales',{
        headers: new HttpHeaders().set('Authorization', token)
                .append('Accept', 'application/json;odata=verbose')
                .append('Content-Type','application/json')
       }).subscribe(data => {
        resolve(data);    
      }, err => {
        console.log(err);
      });
    }); 
  } 

  groupName(token) {   
    return new Promise(resolve => {  
      this.http.get(this.apiUrl+'hot/roles/groupName',{
        headers: new HttpHeaders().set('Authorization', token)
                .append('Accept', 'application/json;odata=verbose')
                .append('Content-Type','application/json')
       }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  managerOfRecruiting(id,token) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'hot/requirement/displayalltechrec/'+id+'/ManagerOfRecruiting',{
        headers: new HttpHeaders().set('Authorization', token)
                .append('Accept', 'application/json;odata=verbose')
                .append('Content-Type','application/json')
       }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }



}
