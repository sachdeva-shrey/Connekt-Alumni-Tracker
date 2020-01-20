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
  getEvents = () =>
  this._documentService
    .GetDocumentList()
    .subscribe(res => {
      this.documents = res;
    });

  reject = data => this._documentService.DeleteDocument(data);
}
