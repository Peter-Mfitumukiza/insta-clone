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
  errorMessage="";
  sendingLink = false;
  forgotPassForm = new FormGroup({
    email: new FormControl("", [
      Validators.required, Validators.email
    ])
  });

  sendMail(){
    this.sendingLink = true;
    this.authService.forgotPass(this.forgotPassForm.value).subscribe(
      (res: any) =>{
        if(res.status == "success"){
          alert("Check your email inbox for the link to your reset password.");
          this.sendingLink = false;
          this.router.navigate(['/user/login']);
        }
        if(res.status == "error"){
          this.errorMessage = res.message;
          this.sendingLink = false;
        }
      },  
      error => {
        this.sendingLink = false;
        console.log("An error occurred sending reset link!");
      }
    );
  }

  backToLogin(){
    this.router.navigate(['/user/login']);
  }

  ngOnInit(): void {
  }

}
