import { Component, OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import { SignUpService} from '../signup.service';
import { Routes,Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[SignUpService]
})
export class SignupComponent implements OnInit {
  credentials = { name : '',email:'', pwd :''};
  constructor(private translate:TranslateService,private _signupService:SignUpService,private route:Router) { 

  }

  ngOnInit() {
    
  }
  signupSubmit(credentials){
    // console.log(credentials);
     this._signupService.signupSubmit(credentials).subscribe(
       data => {
         
       console.log("success");
       this.route.navigate(['login']);
     },
     err => {
       console.log("failed");
     });
   }
}
