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

  registerForm = new FormGroup({
    email: new FormControl("", [
      Validators.required, Validators.email
    ]),
    fullName: new FormControl("",[
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
    this.authService.register(this.registerForm.value);
    this.router.navigate(['/validate-email']);
  }

  onChange(target: any){
    console.log(this.registerForm);
  }


}
