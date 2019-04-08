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
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule ,
  MatTooltipModule,
  MatCheckboxModule,
  MatListModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatProgressBarModule,
  MatTableModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatSnackBarModule,
  MatDialogModule,
  MatSliderModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule
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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule ,
    MatTooltipModule,
    MatCheckboxModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSliderModule,
    MatStepperModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYT8pe61MUbk27eiYi9LnnPhwo031Ye7w'
    })
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule ,
    MatTooltipModule,
    MatCheckboxModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSliderModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
