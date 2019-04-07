import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat = -36.79648;
  lng = 174.646926;
  
  constructor() { }

  ngOnInit() {
  }

}
