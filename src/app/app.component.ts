import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import { SharedService } from './shared.service';
import{MapdataService} from './mapdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MapdataService]
})
export class AppComponent {
  title = 'app works!';
  lat: number = 12.978492;
lng: number = 80.21942;
brandName:any = 'APPLE';
Mapdata=[];
constructor(private _MapdataService :MapdataService,private translate:TranslateService){
    translate.addLangs(["en", "fr","tm"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en| tm |fr/) ? browserLang : 'en');

        
  }
}
