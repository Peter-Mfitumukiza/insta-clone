import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router ) { }
  forgotPassForm = new FormGroup({
    email: new FormControl("", [
      Validators.required, Validators.email
    ])
  });

  sendMail(){
    this.authService.forgotPass(this.forgotPassForm.value);
    this.router.navigate(['/navbar']);
  }

  backToLogin(){
    this.router.navigate(['/user/login']);
  }

  ngOnInit(): void {
  }

}
