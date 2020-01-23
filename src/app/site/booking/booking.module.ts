import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: BookingComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [BookingComponent]
})
export class BookingModule { }
