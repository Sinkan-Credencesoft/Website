import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/room/room';
import { PROPERTY_ID, ApiService } from 'src/app/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  rooms: Room[];
  fromDate: any;
  toDate: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getRoom();
  }

  getRoom()
  {
    this.apiService.getRoomDetailsByPropertyId(PROPERTY_ID).subscribe(response => {

      console.log('response room ' + JSON.stringify(response.body));
      this.rooms = response.body;
    },
      error => {
        if (error instanceof HttpErrorResponse) {

        }
      }
  );
  }

getRoomByDate() {
  this.apiService.getRoomDetailsByPropertyIdAndDate(PROPERTY_ID, this.fromDate, this.toDate) .subscribe(response => {

    console.log('response room ' + JSON.stringify(response.body));
    this.rooms = response.body;
  },
    error => {
      if (error instanceof HttpErrorResponse) {

      }
    }
);
}
}
