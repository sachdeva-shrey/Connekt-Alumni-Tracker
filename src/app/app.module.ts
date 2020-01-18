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

  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotableAlumniComponent,
    AdminpanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'AlumniReg'),
    AngularFirestoreModule
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
