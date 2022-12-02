import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get userNAme(){
    return this.registrationForm.get('userName')
  }
  constructor(private fb: FormBuilder){}

  registrationForm = this.fb.group({
    userName: ['Meskhi',[Validators.required, Validators.minLength(3) ]],
    password: ['',Validators.required],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
  })


  })
// registrationForm = new FormGroup({
//   userName: new FormControl('ana'),
//   password: new FormControl(''),
//   confirmPassword: new FormControl(''),
//  address: new FormGroup({
//   city: new FormControl(''),
//   state: new FormControl(''),
//   postalCode: new FormControl('')
// })

// })
confirm(){

}
loadApiData(){
  this.registrationForm.patchValue({
    userName: 'Anuka',
  password: 'test',
  confirmPassword: 'test',
 address: {
  city: 'City',
  state: 'State',
  postalCode: '1234567'
 }
})
}
}
