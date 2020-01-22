import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { RoomsModule } from './rooms/rooms.module';
import { RoomComponent } from './home/room/room.component';
import { ContactComponent } from '../contact/contact.component';
import { PolicyComponent } from '../policy/policy.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { BookComponent } from '../book/book.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path: '', component: HomeModule},
  { path: 'rooms', component: RoomsComponent},
  { path: 'book', component: BookComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'policy', component: PolicyComponent},

  { path: 'contact', component: ContactComponent},

];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,

    HomeModule,
    RoomsModule,
    RouterModule.forRoot(routes),
  ]
})
export class SiteModule { }
