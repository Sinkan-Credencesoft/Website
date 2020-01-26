import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/room/room';
import { ApiService, PROPERTY_ID } from 'src/app/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms: Room[];

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.getRoom();
  }

  getRoom()
  {
    this.apiService.getRoomDetailsByPropertyId(PROPERTY_ID).subscribe(response => {

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
