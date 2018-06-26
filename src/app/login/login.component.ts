import { Component, OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import{AppService}from '../login.service';
import { Routes,Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AppService]
})
export class LoginComponent implements OnInit {
  public router;
  credentials = { email :'', pwd :''};
  userdetails : any;
  user_details : any;
  name : any;
  constructor(private translate:TranslateService,private _appservice : AppService,private route:Router) { 

  }
  loginSubmit(loginData){
    console.log(loginData)
  this._appservice.loginSubmit(loginData).subscribe(
         data => {
           console.log("success");
           this.userdetails=AppService.userDetails;
           console.log(this.userdetails.name,"working");
           window.sessionStorage.setItem('user_details',this.userdetails);
           window.sessionStorage.setItem('name',JSON.parse(this.userdetails).name);

           this.user_details = JSON.parse(window.sessionStorage.getItem('userdetails'));
           
           alert(this.translate.instant("LOGIN SUCCESSFUL"));
           this.route.navigate(['/search']);
         },
         err => { 
           console.log("failed");
         }
  );
}
 ngOnInit() {
  
  }
    
  
}

