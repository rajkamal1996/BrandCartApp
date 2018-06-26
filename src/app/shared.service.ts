import { Injectable } from '@angular/core';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';


@Injectable()
export class SharedService {
 
  private messageSource = new BehaviorSubject<string>("default message");  

  currentmessage = this.messageSource.asObservable();
 
  constructor(){
  }
  ChangeMessage(message:string){
    this.messageSource.next(message)
  }
}