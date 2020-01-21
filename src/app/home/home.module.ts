import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { SliderComponent } from './slider/slider.component';
import { BlogComponent } from './blog/blog.component';
import { ServiceComponent } from './service/service.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  { path: '', component: HomeComponent},

];

@NgModule({
  declarations: [HomeComponent,

    GetintouchComponent,
    SliderComponent,
    BlogComponent,
    ServiceComponent,
    AboutusComponent,
    RoomComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class HomeModule { }
