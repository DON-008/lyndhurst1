import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { SettingComponent } from './component/setting/setting.component';
import { FacilitiesComponent } from './component/facilities/facilities.component';
import { TestimoniesComponent } from './component/testimonies/testimonies.component';
import { ContactComponent } from './component/contact/contact.component';
import { DiningComponent } from './component/dining/dining.component';
import { StaffComponent } from './component/staff/staff.component';
import { ComplimentComponent } from './component/compliment/compliment.component';
import { CqstandardsComponent } from './component/cqstandards/cqstandards.component';
import { FeesComponent } from './component/fees/fees.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SettingComponent,
    FacilitiesComponent,
    TestimoniesComponent,
    ContactComponent,
    DiningComponent,
    StaffComponent,
    ComplimentComponent,
    CqstandardsComponent,
    FeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
