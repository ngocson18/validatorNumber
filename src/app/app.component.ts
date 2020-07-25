import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'validate-phonenumber';
  modNumberPattern = '^((\\+84-?)|0)?[0-9]{10}$';
  isValidFormSubmitted = false;
  user = new User();

  // tslint:disable-next-line:typedef
  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
      return true;
    }
    this.isValidFormSubmitted = true;
    form.resetForm();
  }
}
