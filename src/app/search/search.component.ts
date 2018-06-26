import { Component, Input, OnInit, OnChanges } from '@angular/core';
import {TranslateService} from 'ng2-translate'; 
import {Router} from "@angular/router";
import { SharedService } from '../shared.service';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {FormControl} from '@angular/forms';
import{MapdataService} from '../mapdata.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SharedService,
              MapdataService
              ]
})
export class SearchComponent implements OnInit {

  public brandName;
  Mapdata=[];
  message : string;
  protected captain: string;
  imageLink: SafeResourceUrl;
 
  constructor(private translate:TranslateService,private _MapdataService :MapdataService, private sanitizer : DomSanitizer, private router: Router, private data :SharedService ) { 
  }

onSelect(brand){
  this.router.navigate(['/search' , brand.brand]); 
}

  ngOnInit() {
    this._MapdataService.getMapdata(name)   
    .subscribe(
      resEmpData => this.Mapdata = resEmpData
   );
  }
}