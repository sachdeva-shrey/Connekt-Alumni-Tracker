import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
@Component({
  selector: 'app-adminauth',
  templateUrl: './adminauth.component.html',
  styleUrls: ['./adminauth.component.css']
})
export class AdminauthComponent implements OnInit {
    documents;
    constructor(
        private _documentService : DocumentService,
      ) { }

  ngOnInit() {
    this.getEvents();
  }
//   get events
  getEvents = () =>
  this._documentService
    .GetDocumentList()
    .subscribe(res => {
      this.documents = res;
    });
// reject user
  reject = data => this._documentService.DeleteDocument(data);
// accept user
addusertoaccpteddb(data){
      
}

  accept(data){
    alert("User accpeted scuessfully");
    this.addusertoaccpteddb(data);
    this.reject(data);
  }

}
