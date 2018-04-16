import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';
import { newsletterSlideInAnimation } from '../../animations';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  animations: [
    newsletterSlideInAnimation
  ]
})
export class NewsletterComponent implements OnInit {
  isNewsletterShown = true;
  subscriptionForm: FormGroup;
  name: string;
  email: string;
  constructor(
    private http: Http,
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
   }

  ngOnInit() {
  }

  buildForm() {
    this.subscriptionForm = this.formBuilder.group({
      subscriptionName: this.formBuilder.control(null, [Validators.required, Validators.minLength(5)]),
      subscriptionEmail: this.formBuilder.control(null, [Validators.required, Validators.email]),
    });
  }

  onSubmitForm() {
    this.name = this.subscriptionForm.get('subscriptionName').value;
    this.email = this.subscriptionForm.get('subscriptionEmail').value;
    this.submitEnquiry();
  }

  submitEnquiry() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    const options = new RequestOptions({ headers: headers });
    this.http.post(
      'https://formspree.io/contact@modulrtech.com',
      {
        name: this.name,
        email: this.email,
      },
      options
    ).subscribe(response => {
      this.onResetForm();
    }, error => {
      alert('Unable to connect to server. Please check internation connection and try again later.');
    });
  }

  onResetForm() {
      this.subscriptionForm.reset();
  }

  closeNewsletter() {
    this.isNewsletterShown = false;
  }
}
