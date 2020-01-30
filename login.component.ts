import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  invalidLogin = false;
  constructor(private formBuilder: FormBuilder) {
   }

   onSubmit() {
     if (this.loginForm.invalid) {
       return;
     }
     if (this.loginForm.controls.email.value === 'astha.rai04@gmail.com' && this.loginForm.controls.password.value === 'Astha.rai04') {
       console.log('valid');
     } else {
       this.invalidLogin = true;
     }
   }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: [ '', Validators.required],
     password: [ '', Validators.required]
    });
  }

}
