import { Injectable, NgZone } from "@angular/core";
import { Document, eventtype } from "../_model/document";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class DocumentService {
  userData: Observable<firebase.User>;
  constructor(
    private firestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.userData = angularFireAuth.authState;
  }

  SendVerificationMail() {
    return this.angularFireAuth.auth.currentUser
      .sendEmailVerification()
      .then(() => {
        this.router.navigate(["login/verifyemail"]);
      });
  }
  /* Add Document */
  AddDocument(document: Document) {
    this.angularFireAuth.auth
      .createUserWithEmailAndPassword(document.uemail, document.upassword)
      .then(res => {
        this.SendVerificationMail();
        return new Promise<any>((resolve, reject) => {
          this.firestore
            .collection("documents")
            .add(document)
            .then(
              res => {
                resolve(res);
              },
              err => reject(err)
            );
        });
      })
      .catch(error => {
        alert(error.message);
      });
  }
  /* Get Document */
  GetDocument(id: string) {
    return this.firestore
      .collection("documents")
      .doc(id)
      .snapshotChanges();
  }

  /* Get Document list */
  GetDocumentList() {
    return this.firestore.collection("documents").snapshotChanges();
  }

  /* Update Document */
  updateDocument(userKey, value) {
    return this.firestore
      .collection("documents")
      .doc(userKey)
      .set(value);
  }

  /* Delete Document */
  DeleteDocument(data) {
    return this.firestore
      .collection("documents")
      .doc(data.payload.doc.id)
      .delete();
  }
  /* Signin */
  SignIn(email: string, password: string) {
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        if (res.user.emailVerified !== true) {
          this.SendVerificationMail();
          window.alert("Email id is not yet verified!");
        } else {
          this.router.navigate(["/adminpanel"]);
        }
      })
      .catch(err => {
        alert(err.message);
      });
  }
/****************************
---------Events
****************************/


//Add a event
  AddEvent(event: eventtype) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("eventsdb")
        .add(event)
        .then(
          res => {
            resolve(res);
          },
          err => reject(err)
        );
    });
  }
//Getevent
  GetEvent(id: string) {
	return this.firestore
	  .collection("documents")
	  .doc(id)
	  .snapshotChanges();
    }
// Get eventlist

    GetEventList() {
	return this.firestore.collection("eventsdb").snapshotChanges();
    }



 //closing tag 
}
