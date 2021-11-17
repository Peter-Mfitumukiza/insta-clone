import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Res } from '../../../shared/models/res.model';

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
  user : any;

  submit(){
    this.isChecking = true;
    if(this.changePasswordForm.controls.newPassword.value != this.changePasswordForm.controls.confNewPassword.value){
      this.errorMessage = "Passwords doesn't match.";
      this.isChecking = false;
      return;
    }
    this.authService.changePassword(this.changePasswordForm.controls.newPassword.value, this.user)
        .subscribe((res :Res) => {
          if(res.status !== "success"){
            this.errorMessage = res.message;
            this.isChecking = false;
          }
          this.isChecking = false;
          alert("Password changed successfully.");
          this.router.navigate(['/user/login']);
        },
        err =>{
          this.errorMessage = err.message;
          this.isChecking = false;
        })
  }

  backToLogin(){
    this.router.navigate(['/user/login']);
  }
  ngOnInit(): void {
    let resetLink = this.route.snapshot.params.reset_id;
    this.authService.checkResetId(resetLink).subscribe(
      (res:Res)=>{
        if(res.status != "success"){
          this.router.navigate(['/not-found']);
        }
        this.user = res.data;
      },
      err =>{
        console.log("Error when checking resetid.");
      }
    );
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
