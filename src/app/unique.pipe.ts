import { Pipe, PipeTransform } from '@angular/core';
import {Injectable} from '@angular/core'
@Pipe({
  name: 'unique'
})

@Injectable()
export class UniquePipe implements PipeTransform {
    transform(mapdata: any[], field : string): any[] {

        if (!mapdata) return [];
        var flags = [], output = [], l = mapdata.length, i;

        for( i=0; i<l; i++) {
            if( flags[mapdata[i][field]]) continue;
            flags[mapdata[i][field]] = true;
            output.push(mapdata[i]);
        }

        return output
    }
}
