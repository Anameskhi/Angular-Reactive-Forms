import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
registrationForm = new FormGroup({
  userName: new FormControl('ana'),
  password: new FormControl(''),
  confirmPassword: new FormControl(''),
 address: new FormGroup({
  city: new FormControl(''),
  state: new FormControl(''),
  postalCode: new FormControl('')
})

})
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
