import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { NotableAlumniComponent } from './notable-alumni/notable-alumni.component'
const routes: Routes = [
    { path : 'login' , component : LoginComponent},
    { path : 'notable-alumni' , component : NotableAlumniComponent},   
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
