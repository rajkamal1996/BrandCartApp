 
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {
// filter for custom filtering
transform(Mapdata: any, brandName: any): any {

  if(brandName == '' || brandName == null) return Mapdata;
  return Mapdata.filter(
  function(map){
  if(map.brand == brandName) {
    console.log(map.brand);
    return Mapdata;
  }
},
map => map.brand.toUpperCase().includes(brandName.toUpperCase()));
}
}

