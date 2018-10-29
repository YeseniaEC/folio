import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.minLength(3)],
      email: ['', Validators.required, Validators.email],
      text: ['', Validators.required, Validators.minLength(3)],
    });
   }

  // onSubmit() {
    // this.submitted = true;

  //   if (this.name.invalid) {
  //     return;
  //   }
  //   alert('Success, thank you for your submission.');
  //   console.log('Email Sent');
  // }
  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      console.log('error');
      return;
    }
    alert('THANKS');
  }

}
