import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { WelcomeBannerComponent } from './home/welcome-banner/welcome-banner.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { ProductsComponent } from './home/products/products.component';
import { ServicesComponent } from './home/services/services.component';
import { ContactComponent } from './home/contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { TechnologyComponent } from './home/technology/technology.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeBannerComponent,
    AboutusComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYT8pe61MUbk27eiYi9LnnPhwo031Ye7w'
    })
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
