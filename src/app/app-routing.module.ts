import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotableAlumniComponent } from './notable-alumni/notable-alumni.component';
import { HomeComponent } from './home/home.component';

// Admin Dashboard
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AdmindashboardComponent } from './adminpanel/admindashboard/admindashboard.component';
import { AdmineventsComponent } from './adminpanel/adminevents/adminevents.component';
import { AdminneweventComponent } from './adminpanel/adminevents/adminnewevent/adminnewevent.component';
import { AdminauthComponent } from './adminpanel/adminauth/adminauth.component';
import { AllalumniComponent } from './adminpanel/allalumni/allalumni.component';

// Alumni Dashboard
import { AlumnidashboardComponent } from './alumnihomepage/alumnidashboard/alumnidashboard.component';
import { AlumnieventsComponent } from './alumnihomepage/alumnievents/alumnievents.component';
import { AlumniprofileComponent } from './alumnihomepage/alumniprofile/alumniprofile.component';
// Login Components
import { LoginComponent } from './login/login.component';
import { VerifyemailComponent } from './login/verifyemail/verifyemail.component';

// STudent
import { StudentComponent } from './student/student.component';
import { StudentprofileComponent } from './student/studentprofile/studentprofile.component';
const routes: Routes = [
    // Login 
    { path : 'alumnilogin' , component : LoginComponent},
    { path : 'alumnilogin/verifyemail' , component : VerifyemailComponent},

    { path : 'notable-alumni' , component : NotableAlumniComponent},  
    //alumni
    { path : 'alumnipanel' , component :AlumnidashboardComponent},   
    { path : 'alumnipanel/events' , component :AlumnieventsComponent}, 
    { path : 'alumnipanel/profile' , component :AlumniprofileComponent}, 
    //admin
    { path : 'adminpanel' , component : AdminpanelComponent},   
    { path : 'adminpanel/dashboard' , component : AdmindashboardComponent},   
    { path : 'adminpanel/events' , component : AdmineventsComponent},  
    { path : 'adminpanel/events/create' , component : AdminneweventComponent},  
    { path : 'adminpanel/auth' , component : AdminauthComponent},  
    { path : 'adminpanel/alumnidata' , component : AllalumniComponent},  
    { path : 'home' , component : HomeComponent}, 

    //student
    { path :'student' ,component : StudentComponent},
    { path :'student/profile' ,component : StudentprofileComponent} ,




    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
