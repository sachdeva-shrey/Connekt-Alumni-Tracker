import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
@Component({
  selector: 'app-adminevents',
  templateUrl: './adminevents.component.html',
  styleUrls: ['./adminevents.component.css']
})
export class AdmineventsComponent implements OnInit {

    documents;
    id;
    data;
    constructor(
      private _documentService : DocumentService,
    ) { }
  ngOnInit() {
    this.getDocumentList();
  }

  getDocumentList = () =>
  this._documentService
    .GetEventList()
    .subscribe(res => {
      this.documents = res;
    });

}
