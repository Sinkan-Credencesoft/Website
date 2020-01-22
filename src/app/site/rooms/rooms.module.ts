import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    { path: '', component: RoomsComponent},
    { path: 'details', component: DetailsComponent},

  ];
@NgModule({


  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [RoomsComponent,
  ]
})
export class RoomsModule { }
