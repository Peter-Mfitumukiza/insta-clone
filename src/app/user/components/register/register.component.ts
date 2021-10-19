import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor() { }
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
      Validators.required
      // Validators.pattern('[a-zA-Z_]{0,30}*')
    ]),
    password: new FormControl("",[
      Validators.required
    ])
  });
  

  register(){
    console.log(this.registerForm);
  }
  
  onChange(target: any){
    console.log(this.registerForm);
  }


}
