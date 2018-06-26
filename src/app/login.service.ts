import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class AppService{
   
    //public _loginUrl1 : string ="http://localhost:8080/FrontianShoppiee/user/auth?email=a@a.com&pwd=12345";
    public _loginUrl : string ="http://localhost:8080/BrandCart/rest/user/auth?email=";
    static userDetails:any;
    static response:any; 
    constructor( private _http : Http){}
    loginSubmit(loginData){
       const url=`${this._loginUrl}${loginData.email}&pwd=${loginData.pwd}` 
            // return this ._http.post(url,JSON.stringify({ email: loginData.email, pwd: loginData.pwd }))
            return this ._http.get(url)
            
             .map((response:Response) => 
        {
             AppService.userDetails=response.json(),
               console.log(AppService.userDetails)});
         
    
    }
        
    }

	