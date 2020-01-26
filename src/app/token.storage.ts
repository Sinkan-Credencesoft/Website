import { Injectable } from '@angular/core';
import { Booking } from './booking/booking';
import { Room } from './room/room';
import { Property } from './property/property';


const TOKEN_KEY = 'AuthToken';
const USER_ID = 'UserId';
const PROPERTY_ID = 'PropertyId';
const ROOM_TYPES = 'RoomDetails';
const ROLES = 'Roles';

const PROPERTY_DETAILS = 'PropertyDetails';
const BOOKING_DETAILS = 'BookingDetails';
const ROOM_DETAILS = 'P-Room-Detail';
const USER_NAME = 'UserName';


@Injectable()
export class TokenStorage {
  rooms: Room[] ;
  booking: Booking;
  Property: Property;

  constructor() { }

  signOut() {
    window.sessionStorage.removeItem(PROPERTY_ID);
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(USER_ID);
    window.sessionStorage.removeItem(ROOM_TYPES);
    window.sessionStorage.removeItem(ROLES);
    window.sessionStorage.clear();
  }

  public savePropertyId(PROPERTYID: string) {
    window.sessionStorage.removeItem(PROPERTY_ID);
    window.sessionStorage.setItem(PROPERTY_ID, PROPERTYID);
  }

  public getPropertyId(): string {
    return sessionStorage.getItem(PROPERTY_ID);
  }
  public getProperty(): Property {
    return JSON.parse(sessionStorage.getItem(PROPERTY_DETAILS));
  }

  public saveProperty(property: Property) {
    window.sessionStorage.removeItem(PROPERTY_DETAILS);
    if (property != null) {
      window.sessionStorage.setItem(PROPERTY_DETAILS, JSON.stringify(property));
    } else {
      window.sessionStorage.setItem(PROPERTY_DETAILS, null);
    }
  }

}
