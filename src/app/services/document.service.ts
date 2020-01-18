import { Injectable } from '@angular/core';
import { Document } from '../_model/document';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
 
@Injectable({
providedIn: 'root'
})


export class DocumentService {
    userData: Observable<firebase.User>;
  constructor(private firestore: AngularFirestore,private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
    }
     

  /* Add Document */
  AddDocument(document: Document) {
    this.angularFireAuth
    .auth
    .createUserWithEmailAndPassword(document.uemail, document.upassword)
    .then(res => {
    console.log('You are Successfully signed up!', res);
    })
    .catch(error => {
    console.log('Something is wrong:', error.message);
    });
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("documents").add(document)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
        }

  // /* Get Document */
  GetDocument(id: string) {
    return this.firestore.collection("documents").doc(id).snapshotChanges();
  }  

  /* Get Document list */
  GetDocumentList() {
    return this.firestore.collection("documents").snapshotChanges();
  }

  // /* Update Document */
  updateDocument(userKey, value){
    return this.firestore.collection('documents').doc(userKey).set(value);
  }

  // /* Delete Document */
  DeleteDocument(data) {
    return this.firestore.collection("documents").doc(data.payload.doc.id)
      .delete();
  }
    //   Signin
  SignIn(email: string, password: string) {
    this.angularFireAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(res => {
    console.log('You are Successfully logged in!');
    })
    .catch(err => {
    console.log('Something is wrong:',err.message);
    });
    }
}