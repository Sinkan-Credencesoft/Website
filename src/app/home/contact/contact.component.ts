import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
export interface Email {
  fromEmail: string;
  toEmail: string;
  message: string;
  subject: string;

}
export interface ServiceList {
  fromEmail: string;
  toEmail: string;
  message: string;
  subject: string;

}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  serviceType = [
    {name: 'BookOne Support', value: 'BookOne Support'},
    {name: 'Website Development', value: 'Website Development'},
    {name: 'Integration Service', value: 'Integration Service'},
    {name: 'Product Development', value: 'Product Development'},
    {name: 'Others', value: 'Others'},
  ];

  lat = -36.79648;
  lng = 174.646926;
  constructor(private http: HttpClient) { }
  subject: FormControl = new FormControl();
  name: FormControl = new FormControl();
  fromEmail: FormControl = new FormControl();
  toEmail: FormControl = new FormControl();
  message: FormControl = new FormControl();
  serviceName: string ;
  email: Email ;
  emailSuccess: Boolean ;
  form = new FormGroup({
    subject: new FormControl(),
    name: new FormControl(),
    fromEmail: new FormControl(),
    message:  new FormControl()
  });
  ngOnInit() {
    this.email = {
      fromEmail: '',
      toEmail: '',
      message: '',
      subject: ''
    };
  }


  send() {
    const TO_EMAIL = 'samaya.muduli@credencesoft.co.nz';
    const API_URL = 'https://booking-api-csoft-in.appspot.com';
    //const API_URL = 'http://localhost:8080';
    this.email.fromEmail = this.fromEmail.value ;
    this.email.toEmail = TO_EMAIL ;
    console.log(this.serviceName);
    this.email.subject = this.serviceName ;
    this.email.message = this.message.value ;
   // this.http.post<Email>(API_URL + 'api/website/sendEmailFromWebSite', this.email).
    this.http.post<boolean>(API_URL + '/api/website/sendEmailFromWebSite', this.email).
   subscribe(response => {
    this.emailSuccess = response;
    console.log(response);
    this.email = {
      fromEmail: '',
      toEmail: '',
      message: '',
      subject: ''
    };
   });
  }

}
