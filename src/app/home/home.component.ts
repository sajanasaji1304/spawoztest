import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray, FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm=new FormGroup({
  name:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
  address:new FormControl('',[Validators.required]),
  pin:new FormControl('',[Validators.required]),
  phone:new FormControl('',[Validators.required]),
  })
get name(){return this.loginForm.get('name')}
get email(){return this.loginForm.get('email')}
get address(){return this.loginForm.get('address')}
get pin(){return this.loginForm.get('pin')}
get phone(){return this.loginForm.get('phone')}
  public addresses: any[] = [{
    address: '',
    street: '',
    city: '',
    country: ''
  }];

  constructor() { }

  ngOnInit(): void {
  }
  addAddress() {
    this.addresses.push({
      id: this.addresses.length + 1,
      address: '',
      street: '',
      city: '',
      country: ''
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }

  logValue() {
    console.log(this.addresses);
  }
  Submit(formData: any):any{
    console.log(formData)

  }

}
