import { Component, OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {ActivatedRoute} from '@angular/router';
import{MapdataService} from './mapdata.service';
import { Routes,Router } from '@angular/router';
declare var google: any;
@Component({
  templateUrl: './map-display/map-display.component.html',
  styleUrls: ['./map-display/map-display.component.css'],
  providers:[MapdataService]
})
export class BrandDetailComponent implements OnInit {
  public brandName;
  Mapdata=[];
  Bname:any;
  lat: number = 12.978492;
  lng: number = 80.21942;
  username : string;
     constructor(private translate:TranslateService,private router:Router,private route : ActivatedRoute,private _MapdataService :MapdataService) { 
         }

  ngOnInit() {          
    let name = this.route.snapshot.params['name'];
      this.brandName = name;
      this._MapdataService.getMapdata(name)   
       .subscribe(
         resEmpData => this.Mapdata = resEmpData
      );
           this.username = (window.sessionStorage.getItem('name'));      
    }
    
    logout() : any {
      window.sessionStorage.clear();
      this.router.navigate(['login']);
    }
  
}