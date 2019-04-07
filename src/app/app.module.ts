import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYT8pe61MUbk27eiYi9LnnPhwo031Ye7w'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
