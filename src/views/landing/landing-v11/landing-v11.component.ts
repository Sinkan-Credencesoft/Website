import { Component, NgModule, OnInit } from '@angular/core';
import { NewsTwoComponent } from '../components/news-two/news-two.component';

@Component({
  selector: 'app-landing-v11',
  templateUrl: './landing-v11.component.html',
  styleUrls: ['./landing-v11.component.scss']

})
export class LandingV11Component implements OnInit {


  backgroundColor = "landing-gradient-steel-gray"
  showCustomizer = false;
  constructor() { }

  ngOnInit() {
  }

  changeBg(colorName: any) {
    this.backgroundColor = "landing-" + colorName;
  }
  toggleCustomizer() {
    this.showCustomizer = !this.showCustomizer;

  }

}
