import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor( private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
  }
  
  registering:boolean = false;
  errorMessage = "";

  registerForm = new FormGroup({
    email: new FormControl("", [
      Validators.required, Validators.email
    ]),
    fullname: new FormControl("",[
      Validators.required, Validators.pattern('[a-zA-Z ]*')
    ]),
    username: new FormControl("",[
      Validators.required, Validators.minLength(4),
      Validators.pattern('[a-zA-Z_]*')
    ]),
    password: new FormControl("",[
      Validators.required, Validators.minLength(6)
    ])
  });
  

  register(){
    this.registering = true;
    this.authService.register(this.registerForm.value).subscribe( (res:any) =>{
      if(res.status == "success"){
        window.localStorage.setItem('email', this.registerForm.controls.email.value);
        this.router.navigate(['/verify-email']);
      }else{
        this.registering = false;
        this.errorMessage = res.message;
      }
    }, 
    err=>{
      this.registering = false;
      console.log(err);
    });
  }


}
function data(data: any, arg1: (any: any) => void, arg2: (err: any) => void) {
  throw new Error('Function not implemented.');
}

