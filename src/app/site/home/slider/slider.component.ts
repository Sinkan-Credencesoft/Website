import { Component, OnInit } from '@angular/core';

import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  currentDay : string;
  day : string;
  year : string;
  month : number;

  day2 : string;
  year2 : string;
  month2: number;

  fromDate : string;

  monthArray =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  constructor(private router : Router) { }


  ngOnInit()
  {

    this.checkincheckoutDate();

  }

  checkincheckoutDate()
  {
    let currentDate: Date = new Date();
    this.day = this.getDay(currentDate);
    this.year = String(currentDate.getFullYear());
    this.month = currentDate.getMonth();


    let afterDate: Date = new Date();
    afterDate.setDate(currentDate.getDate()+1);

    this.day2 = this.getDay(afterDate);
    this.year2 = String(afterDate.getFullYear());
    this.month2 = afterDate.getMonth();
  }


  getDay(date:Date)
  {
    if(date.getDate().toString().length==1)
    {
        this.currentDay = '0'+date.getDate();
    }
    else
    {
        this.currentDay = ''+date.getDate();
    }

    return this.currentDay;
  }

  onBook()
  {

    console.log('current day  : '+ this.fromDate);
    // this.bookingURLOB = new Booking();
    // this.bookingURLOB.businessEmail = this.host.businessEmail;
    // this.bookingURLOB.businessName = this.host.businessName;
    // this.bookingURLOB.mobile = this.host.mobile;
    // this.bookingURLOB.roomBooking = true;
    // this.bookingURLOB.roomId = room.roomId,
    // this.bookingURLOB.noOfRooms = 1;

    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //       bookingOb: JSON.stringify(this.bookingURLOB),
    //   }
    // };

    this.router.navigate(['/booking/choose'] );
  }

}
