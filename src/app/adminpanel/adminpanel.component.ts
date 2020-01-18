import { Component,OnInit,OnDestroy} from "@angular/core";
import { DocumentService } from './../services/document.service';
@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
    documents;
    id;
    constructor(
      private _documentService : DocumentService,
    ) { }
  
    ngOnInit() {
      this.getDocumentList();
    }
  
    getDocumentList = () =>
    this._documentService
      .GetDocumentList()
      .subscribe(res => {
        this.documents = res;
      });
  
      deleteDocument = data => this._documentService.DeleteDocument(data);
  }