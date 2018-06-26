import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class SignUpService {
  static response:any;
  static userDetails:any;

  public signupUrl : string ="http://localhost:8080/BrandCart/rest/user/add?&name=";
  constructor( private _http : Http){}
  signupSubmit(signupData){
            const url=`${this.signupUrl}${signupData.name}&email=${signupData.email}&pwd=${signupData.pwd}`;
            return this._http.get(url)
            .map((response:Response) =>
            {
                 SignUpService.userDetails=response;
            });

        }
  }
