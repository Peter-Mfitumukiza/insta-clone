import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private authService: AuthService) { }
  changePasswordForm;
  errorMessage;
  isChecking = false;

  submit(){
    this.isChecking = true;
    console.log(this.changePasswordForm.get('newPassword'));
    if(this.changePasswordForm.controls.newPassword.value != this.changePasswordForm.controls.confNewPassword.value){
      this.errorMessage = "Passwords doesn't match.";
      this.isChecking = false;
      return;
    }
    // this.authService.checkCode(this.changePasswordForm.value.code, this.userEmail).subscribe(
    //   (res:any) =>{
    //     if(res.status == "error"){
    //       this.errorMessage = res.message;
    //       this.isChecking = false;
    //     }
    //     if(res.status == "success"){
    //       window.localStorage.setItem('token', res.data);
    //       window.localStorage.removeItem('email');
    //       this.router.navigate(['/home']);
    //     }
    //   },
    //   err =>{
    //     this.errorMessage = "Something went wrong try again.";
    //     this.isChecking = false;
    //     console.error(err);
    //   }
    // );
  }

  backToLogin(){
    this.router.navigate(['/user/login']);
  }
  ngOnInit(): void {
    // let resetLink = this.route.snapshot.params.reset_id;
    // this.authService.checkResetId(resetLink).subscribe(
    //   (res:any)=>{
    //     if(res.status != "success"){
    //       this.router.navigate(['/not-found']);
    //     }
    //   },
    //   err =>{
    //     console.log("Error when checking resetid.");
    //   }
    // );
    this.changePasswordForm = new FormGroup({
      newPassword: new FormControl("", [
        Validators.required, Validators.minLength(6)
      ]),
      confNewPassword: new FormControl("", [
        Validators.required, Validators.minLength(6)
      ])
    });
  }

}
