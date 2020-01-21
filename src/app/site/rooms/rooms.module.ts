import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RoomComponent } from '../home/room/room.component';
import { SiteModule } from '../site.module';

@NgModule({

  imports: [
    CommonModule
  ],
  declarations: [RoomsComponent,
  ]
})
export class RoomsModule { }
