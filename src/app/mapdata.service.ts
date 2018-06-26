import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MapdataService{
    private _url: string ="https://api.myjson.com/bins/6ukfz";
    constructor(private _http:Http){
    }
    getMapdata(name:string){
        return this._http.get(this._url)
        .map((response:Response) => response.json())
    }
}
