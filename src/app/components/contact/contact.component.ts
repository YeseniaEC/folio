import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent implements OnInit {
  submitted = false;

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder ) {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      name: [
        '',
        [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.nullValidator
        ],
      ],
      email: [
        '',
        [
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.nullValidator
        ]
      ],
      message: [
        '',
        [
        Validators.required,
        Validators.minLength(3),
        Validators.nullValidator,
        ]
      ],
    });
  }

  ngOnInit() { }

  onSubmit() {
    console.log('You clicked me');

    this.submitted = true;
    console.log(this.contactForm.value);

    if (this.contactForm.invalid) {
      console.log('error');
      return;
    }
    alert('THANKS');
  }

}
