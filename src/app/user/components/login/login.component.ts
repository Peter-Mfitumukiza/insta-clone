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
  loginForm = new FormGroup({
    email: new FormControl("", [
      Validators.required
    ]),
    password: new FormControl("",[
      Validators.required
    ])
  });

  login(){
    this.authService.login(this.loginForm.value);
    this.router.navigate(['/navbar']);
  }

  ngOnInit(): void {
  }

}
