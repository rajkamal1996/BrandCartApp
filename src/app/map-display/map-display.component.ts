import { Component, OnInit , Input } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {SharedService} from '../shared.service';
@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css'],
  providers: [SharedService]
})
export class MapDisplayComponent implements OnInit {
  message:string;
  constructor(private translate:TranslateService,private data : SharedService) { 
  }
  ngOnInit() {
    this.data.currentmessage.subscribe(message => this.message= message)
  }

}
