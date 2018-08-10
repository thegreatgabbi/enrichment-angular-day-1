import { Component } from '@angular/core';
import { AddressModel } from './model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  addresses: AddressModel[] = [
    {
      name: "Fred Flintstone",
      phone: "555-12345",
      email: "fred@gmailcom"
    },
    {
      name: "Barney rubble",
      phone: "555-67890",
      email: "barney@gmailcom"
    },
  ]

  title = 'day1-workshop';

  submitForm(form) {
    console.log("received", form);
    this.addresses.push(form.value);
    console.log(this.addresses);
  }
}
