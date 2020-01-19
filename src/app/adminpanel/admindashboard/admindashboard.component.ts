import { Component,OnInit,OnDestroy} from "@angular/core";
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
    documents;
    id;
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
  
      deleteDocument = data => this._documentService.DeleteDocument(data);
  }