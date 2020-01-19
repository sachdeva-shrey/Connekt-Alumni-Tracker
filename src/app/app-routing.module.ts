import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotableAlumniComponent } from './notable-alumni/notable-alumni.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path : 'login' , component : LoginComponent},
    { path : 'notable-alumni' , component : NotableAlumniComponent},   
    { path : 'adminpanel' , component : AdminpanelComponent},   
    { path : 'home' , component : HomeComponent}, 
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
