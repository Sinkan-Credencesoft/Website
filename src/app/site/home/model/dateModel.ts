import { Room } from 'src/app/room/room';
import { Booking } from '../../../booking/booking';

export class DateModel {

  checkedin: string;
  checkout: string;

  room : Room;
  booking : Booking;

  constructor()
      { }
}
