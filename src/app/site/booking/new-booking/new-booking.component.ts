import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/room/room';
import { PROPERTY_ID, ApiService } from 'src/app/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { DateModel } from './../../home/model/dateModel';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { Booking } from '../../../booking/booking';
import { FormControl, FormGroup, NgForm, FormGroupDirective, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css']
})
export class NewBookingComponent implements OnInit {

  rooms: Room[];
  room: Room;
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

  firstName: FormControl = new FormControl("",Validators.required);
  lastName: FormControl = new FormControl("",Validators.required);
  bookingEmail: FormControl = new FormControl("",Validators.required);
  bookingContact: FormControl = new FormControl("",Validators.required);
  noOfPersons: FormControl = new FormControl("",Validators.required);
  noOfRooms: FormControl = new FormControl("",Validators.required);
  //termAndConditions : FormControl = new FormControl("",Validators.required);

  onBookingForm: FormGroup = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    bookingEmail: this.bookingEmail,
    bookingContact : this.bookingContact,
    noOfPersons: this.noOfPersons,
    noOfRooms: this.noOfRooms,
   // termAndConditions : this.termAndConditions,
  });

  constructor(private apiService: ApiService,
    private router : Router,
    private formBuilder: FormBuilder,
    private acRoute : ActivatedRoute,)
  {
    this.dateModel = new DateModel();
    this.booking = new Booking();
    this.room = new Room();

  }

 ngOnInit()
 {
  this.acRoute.queryParams.subscribe(params => {

    if(params["dateob"] != undefined)
    {
        this.dateModel = JSON.parse(params["dateob"]);

        this.room = this.dateModel.room;

        this.getCheckInDateFormat(this.dateModel.checkedin);
        this.getCheckOutDateFormat(this.dateModel.checkout);
    }

  });
 }

 onChangeRoom($event, roomNumber : number)
 {

   if(this.booking.noOfRooms != undefined)
   {

     if(this.booking.noOfRooms > roomNumber)
     {

       this.booking.noOfRooms = roomNumber;
       // this.noOfRooms.reset();
       this.noOfRooms.setValue(roomNumber);
     }
   }
 }

 onChangePerson($event, personNumber : number)
 {

   if(this.booking.noOfPersons != undefined)
   {
     if(this.booking.noOfPersons > personNumber)
     {

       this.booking.noOfPersons = personNumber;
       this.noOfPersons.setValue(personNumber);
     }
   }
 }

 onCheckOut()
 {
    this.dateModel.booking = this.booking;

    let navigationExtras: NavigationExtras = {
      queryParams: {
          dateob: JSON.stringify(this.dateModel),
      }
    };
    this.router.navigate(['/booking/payment'],navigationExtras );

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
