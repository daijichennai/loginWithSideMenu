
import { Injectable } from '@angular/core';
 
export interface User {
  name:string;
  role:number;
}
@Injectable()
export class AuthProvider {
currentUser : User;

  constructor() {
  }
  
  login(name:string, password:string) : Promise<boolean>{
    return new Promise((resolve,reject)=>{
      if (name === 'admin' && password ==='admin'){
        this.currentUser = {
          name :name,
          role :0 
        };
        resolve(true);
      } else if (name === 'user' && password === 'user') {
        this.currentUser = {
          name: name,
          role: 1
        };
        resolve(true);
      }else {
        reject(false);
      }
    });
  }

  isLoggedIn() {
    return this.currentUser!= null;
  }

  logOut() { 
    return this.currentUser = null;
  }

  isAdmin() { 
    return this.currentUser.role === 0;
  }

}
