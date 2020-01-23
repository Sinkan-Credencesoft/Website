import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/property/property';
import { ApiService, PROPERTY_ID } from 'src/app/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  property: Property;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getProperty();
  }
  getProperty() {
    this.apiService.getPropertyDetailsByPropertyId(PROPERTY_ID).subscribe(response => {

      console.log('response room ' + JSON.stringify(response.body));
      this.property = response.body;
    },
      error => {
        if (error instanceof HttpErrorResponse) {

        }
      }
  );
  }
}
