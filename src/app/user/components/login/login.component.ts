import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  invalidCred: boolean = false;
  logginIn = false;

  // Login form
  loginForm = new FormGroup({
    email: new FormControl("", [
      Validators.required, Validators.email
    ]),
    password: new FormControl("",[
      Validators.required, Validators.minLength(6)
    ])
  });

  login(){
    this.logginIn = true;
    this.authService.login(this.loginForm.value).subscribe((res: any) => {
      if(res.status === "success"){
        window.localStorage.setItem('token', res.data);
        this.router.navigate(['/home']);
      }else if (res.status === "error"){
        this.logginIn = false;
        this.invalidCred = true;
      }
    },
    err => {
      this.logginIn = false;
      console.log(err);
    });
  }

  disableInvalidCred(){
    this.invalidCred = false;
  }

  toForgotPassword(){
    this.router.navigate(['/user/forgot-password']);
  }
  ngOnInit(): void {
  }

}
