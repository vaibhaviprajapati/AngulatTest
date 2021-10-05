import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo';
  demoForm!:FormGroup;
  constructor(private fb: FormBuilder)
  {}
  ngOnInit()
  {
  this.demoForm = this.fb.group({
    fname: ['', [Validators.required, Validators.minLength(3),  Validators.pattern('^[a-zA-Z \-\']+')]],
    lname: ['', [Validators.required, Validators.minLength(3),  Validators.pattern('^[a-zA-Z \-\']+')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
    
  });
}
get fname() 
{ 
  return this.demoForm.get('fname'); 
}
get lname() 
{ 
  return this.demoForm.get('lname'); 
}
get email() 
{ 
  return this.demoForm.get('email'); 
}
get password() 
{ 
  return this.demoForm.get('password'); 
}
  onSubmit() {
    console.log(this.demoForm.value);
  }
}
