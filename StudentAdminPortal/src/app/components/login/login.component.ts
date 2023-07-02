import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private loginAuth: AuthService, private router : Router ) {}

  ngOnInit() : void {}

  loginForm = new FormGroup (
    {
      email : new FormControl('', [Validators.required , Validators.email]),
      pwd : new FormControl ('' , [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
    }
  );
  isUserValid : boolean =false ;
  loginSubmited()
  {
    this.loginAuth.loginUser([this.loginForm.value.email!, this.loginForm.value
    .pwd!]).subscribe(res => {
      if(res =='Failure')
      {
        this.isUserValid=false ;
        alert('Login Unsuccessfull');
      }else
      {
        this.isUserValid= true ;
       this.loginAuth.setToken(res);
        this.router.navigateByUrl('students');
      }
    });
  }

  get Email() : FormControl{
    return this.loginForm.get ('email') as FormControl;
  }

  get Pwd() : FormControl{
    return this.loginForm.get ('pwd') as FormControl;
  }
}

