import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `
    <!-- <h1>Heroes</h1>
    <div class="header-bar"></div> -->
    <app-spaces></app-spaces>
  `,
})
export class AppComponent {
  title = 'testit';
  // Form Controls
  // name = new FormControl('', Validators.required);
  // email = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('', Validators.required);

  // Form Group
  // registrationForm = new FormGroup({
  //   name: this.name,
  //   email: this.email,
  //   password: this.password,
  // });

  // Method to submit the form
  // onSubmit() {
  //   if (this.registrationForm.valid) {
  //     console.log('Form Submitted: ', this.registrationForm.value);
  //   } else {
  //     console.log('Form is invalid: ', this.registrationForm);
  //   }
  // }
}
