import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrls: ['./validate-email.component.scss']
})
export class ValidateEmailComponent implements OnInit {
  verifyMailForm;
  errorMessage;
  isChecking = false;
  userEmail = window.localStorage.getItem('email');
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.verifyMailForm = new FormGroup({
      code: new FormControl("", [
        Validators.required, Validators.maxLength(6)
      ])
    });
  }

  submit(){
    this.isChecking = true;
    this.authService.checkCode(this.verifyMailForm.value.code, this.userEmail).subscribe(
      (res:any) =>{
        if(res.status == "error"){
          this.errorMessage = res.message;
          this.isChecking = false;
        }
        if(res.status == "success"){
          window.localStorage.setItem('token', res.data);
          window.localStorage.removeItem('email');
          this.router.navigate(['/home']);
        }
      },
      err =>{
        this.errorMessage = "Something went wrong try again.";
        this.isChecking = false;
        console.error(err);
      }
    );
  }

  backToLogin(){
    this.router.navigate(['/user/login']);
  }
}
