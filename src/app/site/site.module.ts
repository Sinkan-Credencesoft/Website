import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { RoomsModule } from './rooms/rooms.module';

const routes: Routes = [
  { path: '', component: HomeModule},
  { path: 'rooms', component: RoomsModule},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    RoomsModule,
    RouterModule.forRoot(routes),
  ]
})
export class SiteModule { }
