import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Location } from '@angular/common';
import { enquiryPageAnimation } from '../../animations';
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss'],
  animations: [
    enquiryPageAnimation
  ]
})
export class EnquiryComponent implements OnInit {
  @HostBinding('style.position') position = 'relative';
  @HostBinding('@enquiryPageAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  activatedSubmit = false;
  formSubmitted = false;
  submittedFailed = false;
  contactForm: FormGroup;
  allInterests: string[] = [
    'Working with us',
    'Subscribing to our newsletter',
    'Booking a demo'
  ];
  interestedType: string;
  company: string;
  name: string;
  email: string;
  message: string;

  constructor(
    private http: Http,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.contactForm = this.formBuilder.group({
      contactInterest: this.formBuilder.control(null, [Validators.required]),
      contactCompany: this.formBuilder.control(null, [Validators.required, Validators.minLength(5)]),
      contactName: this.formBuilder.control(null, [Validators.required, Validators.minLength(5)]),
      contactEmail: this.formBuilder.control(null, [Validators.required, Validators.email]),
      contactMessage: this.formBuilder.control(null)
    });
  }

  onSubmitForm() {
    this.interestedType = this.contactForm.get('contactInterest').value;
    this.company = this.contactForm.get('contactCompany').value;
    this.name = this.contactForm.get('contactName').value;
    this.email = this.contactForm.get('contactEmail').value;
    this.message = this.contactForm.get('contactMessage').value;
    // console.log(this.interestedType, this.name, this.company, this.email, this.message);
    this.submitEnquiry();
  }

  submitEnquiry() {
    this.activatedSubmit = true;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    const options = new RequestOptions({ headers: headers });
    this.http.post(
      'https://formspree.io/contact@modulrtech.com',
      {
        interestType: this.interestedType,
        company: this.company,
        name: this.name,
        email: this.email,
        message: this.message
      },
      options
    ).subscribe(response => {
      this.submittedForm();
      this.onResetForm();
    }, error => {
      alert('Unable to connect to server. Please check internation connection and try again later.');
      this.submittedFormFailed();
    });
  }

  submittedForm() {
    this.activatedSubmit = false;
    this.formSubmitted = true;
    this.resetFormAnimation();
  }

  resetFormAnimation() {
    setTimeout(() => {
      this.formSubmitted = false;
      this.submittedFailed = false;
    }, 1250);
  }

  submittedFormFailed() {
    this.activatedSubmit = false;
    this.submittedFailed = true;
    this.resetFormAnimation();
  }

  onResetForm() {
    setTimeout(() => {
      this.contactForm.reset();
    }, 1250);
  }

  backToPreviousPage() {
    this.location.back();
  }
}
