import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-allalumni',
  templateUrl: './allalumni.component.html',
  styleUrls: ['./allalumni.component.css']
})
export class AllalumniComponent implements OnInit {
    documents1;
    documents2;
    constructor(
        private _documentService : DocumentService,
      ) { }

  ngOnInit() {
    this.getEvents();
    this.getEvents2();  
}
//   get events
  getEvents = () =>
  this._documentService
    .Getallalumni()
    .subscribe(res => {
      this.documents1 = res;
    });
    getEvents2 = () =>
    this._documentService
      .Getallalumni1()
      .subscribe(res => {
        this.documents2 = res;
      });
      
    

}
