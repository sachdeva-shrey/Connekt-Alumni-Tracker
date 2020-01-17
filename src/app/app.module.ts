import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotableAlumniComponent } from './notable-alumni/notable-alumni.component';
import { AlumniLoginComponent } from './alumni-login/alumni-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotableAlumniComponent,
    AlumniLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
