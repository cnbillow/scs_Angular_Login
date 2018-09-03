import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Login } from './entity/Login';
declare var getCookie:any;

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
    user_login(phone,password){
        var url = environment.url.comment + "/login";
        return this.http.post<Login>(url,{"phone":phone,"password":password})
    }
    user_register(phone,code,password,c_password,role){
        var url = environment.url.comment + "/register";
        return this.http.post<Login>(url,{"name":phone,"code":code,"password":password,"c_password":c_password,'role':role});
    }
    user_register_code(phone){
        var url = environment.url.comment + "/register_code";
        return this.http.post(url,{"phone":phone});
    }
    user_resets_code(phone){
        var url = environment.url.comment + "/reset_code";
        return this.http.post(url,{"phone":phone})
    }
    user_resets_mes(phone,code){
        var url = environment.url.comment + "/reset_mes";
        return this.http.post(url,{"phone":phone,"code":code});
    }
    user_resets_pass(password,c_password){
       var url = environment.url.comment + "/reset_pass";
       return this.http.post(url,{"password":password,"c_password":c_password,"phone":getCookie("resets_user")});
    }
}
