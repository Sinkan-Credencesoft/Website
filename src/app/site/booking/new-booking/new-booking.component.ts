import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/room/room';
import { PROPERTY_ID, ApiService } from 'src/app/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { DateModel } from './../../home/model/dateModel';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { Booking } from '../../../booking/booking';
import { FormControl, FormGroup, NgForm, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css']
})
export class NewBookingComponent implements OnInit {

  rooms: Room[];
  dateModel : DateModel;
  booking : Booking;

  daySelected : string;
  yearSelected : string;
  monthSelected : number;

  daySelected2 : string;
  yearSelected2 : string;
  monthSelected2 : number;


  currentDay : string;

  monthArray =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  constructor(private apiService: ApiService,
    private router : Router,
    private acRoute : ActivatedRoute,)
  {
    this.dateModel = new DateModel();
    this.booking = new Booking();
  }

 ngOnInit()
 {
  this.acRoute.queryParams.subscribe(params => {

    if(params["dateob"] != undefined)
    {
        this.dateModel = JSON.parse(params["dateob"]);

        console.log('this.dateModel '+JSON.stringify(this.dateModel));

        this.getCheckInDateFormat(this.dateModel.checkedin);
        this.getCheckOutDateFormat(this.dateModel.checkout);
    }

  });
 }

 getCheckInDateFormat(dateString:string)
 {
   var yearAndMonth = dateString.split("-", 3);
   this.daySelected = String(yearAndMonth[2].split(" ", 1));
   this.yearSelected = yearAndMonth[0];
   this.monthSelected = parseInt(yearAndMonth[1])-1;
 }

 getCheckOutDateFormat(dateString:string)
 {
   var yearAndMonth = dateString.split("-", 3);
   this.daySelected2 = String(yearAndMonth[2].split(" ", 1));
   this.yearSelected2 = yearAndMonth[0];
   this.monthSelected2 = parseInt(yearAndMonth[1])-1;
 }

}
