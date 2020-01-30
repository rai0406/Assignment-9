import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  invalidRegister = false;


  constructor(private formBuilder: FormBuilder, private router: Router) { }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.controls.email.value === 'astha.rai04@gmail.com' && this.registerForm.controls.password.value === 'Astha.rai04') {
      this.router.navigateByUrl('/login');
    } else {
      this.invalidRegister = true;
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      mobile: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      email: [ '', [Validators.email, Validators.required]],
     password: [ '', [Validators.required , Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
    });
  }

}
