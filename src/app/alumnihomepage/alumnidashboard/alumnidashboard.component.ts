import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
@Component({
  selector: 'app-alumnidashboard',
  templateUrl: './alumnidashboard.component.html',
  styleUrls: ['./alumnidashboard.component.css']
})
export class AlumnidashboardComponent implements OnInit {
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
    .GetPostList()
    .subscribe(res => {
      this.documents = res;
    });

}
