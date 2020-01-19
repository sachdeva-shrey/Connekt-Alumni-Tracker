import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotableAlumniComponent } from './notable-alumni/notable-alumni.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';

/*Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';
import { DocumentService } from './services/document.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { HomeComponent } from './home/home.component';
import { AlumnihomepageComponent } from './alumnihomepage/alumnihomepage.component';
import { HeaderComponent } from './alumnihomepage/header/header.component';
import { AdminnavComponent } from './adminpanel/adminnav/adminnav.component';
import { AdmindashboardComponent } from './adminpanel/admindashboard/admindashboard.component';
import { AdmineventsComponent } from './adminpanel/adminevents/adminevents.component';
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotableAlumniComponent,
    AdminpanelComponent,
    HomeComponent,
    AlumnihomepageComponent,
    HeaderComponent,
    AdminnavComponent,
    AdmindashboardComponent,
    AdmineventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'AlumniReg'),
    AngularFirestoreModule
  ],
  providers: [DocumentService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
