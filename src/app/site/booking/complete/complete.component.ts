import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/room/room';
import { ApiService, PROPERTY_ID } from 'src/app/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  rooms: Room[];
  toDate: string;
  constructor(private apiService: ApiService) { }


  currentDay : string;
  day : string;
  year : string;
  month : number;

  day2 : string;
  year2 : string;
  month2: number;

  fromDate : string;

  monthArray =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


 ngOnInit() {
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

getRoomByDate() {
  this.apiService.getRoomDetailsByPropertyIdAndDate(PROPERTY_ID, this.fromDate, this.toDate) .subscribe(response => {

    //console.log('response room ' + JSON.stringify(response.body));
    this.rooms = response.body;
  },
    error => {
      if (error instanceof HttpErrorResponse) {

      }
    }
);
}

}
