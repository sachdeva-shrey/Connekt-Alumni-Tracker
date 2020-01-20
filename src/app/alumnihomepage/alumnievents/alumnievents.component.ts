import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
@Component({
  selector: 'app-alumnievents',
  templateUrl: './alumnievents.component.html',
  styleUrls: ['./alumnievents.component.css']
})
export class AlumnieventsComponent implements OnInit {
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

    deleteevent(data){
        this._documentService.DeleteEvent(data);
    }
}


