import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/shared/animations/shared-animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  animations: [SharedAnimations]
})


export class FaqsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
