import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Prime Imports
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem, PrimeIcons} from 'primeng/api';  
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule, TableRadioButton } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { Avatar, AvatarModule } from 'primeng/avatar';
import { AvatarGroup, AvatarGroupModule } from 'primeng/avatargroup';
import {MultiSelectModule} from 'primeng/multiselect';
import { CarouselModule} from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import {StyleClassModule} from 'primeng/styleclass';
import {RippleModule} from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextarea, InputTextareaModule} from 'primeng/inputtextarea';
import {DataViewModule} from 'primeng/dataview';
import {Button, ButtonModule} from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FullCalendarModule } from '@fullcalendar/angular';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    ServicesComponent,
    ServiceDetailsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RippleModule,
    StyleClassModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DataViewModule,
    ToolbarModule,
    HttpClientModule,
    DialogModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    InputTextareaModule,
    InputTextModule,
    ButtonModule,
    AccordionModule,
    AvatarGroupModule,
    AvatarModule,
    MatFormFieldModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
