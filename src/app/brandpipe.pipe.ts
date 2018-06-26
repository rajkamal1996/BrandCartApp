import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'brandpipe'
})
export class BrandpipePipe implements PipeTransform {
transform(searchData: any, brandType: any): any {
  if(brandType == '' || brandType == null) return searchData;
  
return searchData.filter(function(map){
  if(map.type == brandType) {
    return searchData.names;
  }
});
}

}
