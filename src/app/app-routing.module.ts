import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotableAlumniComponent } from './notable-alumni/notable-alumni.component';
import { HomeComponent } from './home/home.component';

// Alumni Dashboard
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AdmindashboardComponent } from './adminpanel/admindashboard/admindashboard.component';
import { AdmineventsComponent } from './adminpanel/adminevents/adminevents.component';

const routes: Routes = [
    { path : 'login' , component : LoginComponent},
    { path : 'notable-alumni' , component : NotableAlumniComponent},  
    { path : 'adminpanel' , component : AdminpanelComponent},   
    { path : 'adminpanel/dashboard' , component : AdmindashboardComponent},   
    { path : 'adminpanel/events' , component : AdmineventsComponent},  
    { path : 'home' , component : HomeComponent}, 
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
