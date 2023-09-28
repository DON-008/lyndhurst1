import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'setting',component:SettingComponent},
  {path:'facilities',component:FacilitiesComponent},
  {path:'testimonies',component:TestimoniesComponent},
  {path:'contact',component:ContactComponent},
  {path:'dining',component:DiningComponent},
  {path:'staff',component:StaffComponent},
  {path:'compliment',component:ComplimentComponent},
  {path:'cqstandards',component:CqstandardsComponent},
  {path:'fees',component:FeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
