import { Component, OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate';
@Component({
  selector: 'app-place-locator',
  templateUrl: './place-locator.component.html',
  styleUrls: ['./place-locator.component.css']
})
export class PlaceLocatorComponent implements OnInit {

  constructor(private translate:TranslateService) { 
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }


  ngOnInit() {
    // var map;
    // var infowindow;
    //   function initialize() {
    //     var center = new google.maps.LatLng(12.985550, 80.246117);
    
    //     map = new google.maps.Map(document.getElementById('map-canvas'), {
    //       zoom: 15,
    //       center: center,
    //       mapTypeId: google.maps.MapTypeId.TERRAIN
    //     });
    
    
    //     infowindow = new google.maps.InfoWindow();
    //   var input = document.getElementById('sname').value;
    //   var input2 = document.getElementById('radius').value;
    
    
    //     var service = new google.maps.places.PlacesService(map);
    //     service.nearbySearch({
    
    
    //       location:  new google.maps.LatLng(12.985550, 80.246117),
    //       radius: input2,
    //       query: 'chennai',
    //       types: ['stores'],
    //       name: input,
    //       key: input
    //     }, callback);
    //   }
    
    //   function callback(results, status) {
    //     if (status === google.maps.places.PlacesServiceStatus.OK) {
    
    //       console.log(results);
    // var addr=[];
    //       for (var i = 0; i < results.length; i++) {
    //         createMarker(results[i]);
    //         console.log(results);
    //         addr.push("<div>"+results[i].vicinity+"<br></div>");
    
    //       }
    //       document.getElementById("addr").innerHTML= addr;
    
    //     }
    //   }
    
    //   function createMarker(place) {
    
    
    //     var placeLoc = place.geometry.location;
    //     var marker = new google.maps.Marker({
    //       map: map,
    //       position: place.geometry.location
    //     });
    
    
    //     google.maps.event.addListener(marker, 'click', function() {
    //       infowindow.setContent(place.name+place.vicinity);
    //       infowindow.open(map, this);
    //     });
    //   }
    
    
    
    
  }


}
