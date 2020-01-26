import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { NewBookingComponent } from './new-booking/new-booking.component';
import { ChooseRoomComponent } from './choose-room/choose-room.component';
import { CompleteComponent } from './complete/complete.component';
const routes: Routes = [
  { path: '', component: BookingComponent},
  { path: 'booking/choose', component: ChooseRoomComponent},
  { path: 'booking/booking', component: NewBookingComponent},
  { path: 'booking/payment', component: CheckoutComponent},
  { path: 'booking/complete', component: CompleteComponent}
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [BookingComponent, CheckoutComponent, NewBookingComponent, ChooseRoomComponent, CompleteComponent]
})
export class BookingModule { }
