import { Component, OnInit } from "@angular/core";
import { DocumentService } from "../../services/document.service";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { empty } from 'rxjs';
@Component({
  selector: "app-alumnidashboard",
  templateUrl: "./alumnidashboard.component.html",
  styleUrls: ["./alumnidashboard.component.css"]
})
export class AlumnidashboardComponent implements OnInit {
  documents;
  id;
  data;
  formmessage ="";
  newpostform: FormGroup;
  constructor(private _documentService: DocumentService) {}
  ngOnInit() {
    this.getpostList();
    this.newpostform = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.maxLength(200)
      ]),
      details: new FormControl(null, [
        Validators.required,
        Validators.maxLength(500)
      ])
    });
  }
  createnewpost(form): void {
    if (form.value.details!= null) {
        this.formmessage="Sucessfully added post!";
      this._documentService.AddPost(form.value).then(() => {
        form.reset();
      });
    }
    else{
        this.formmessage="The field can't be empty";
    }
  }
  getpostList = () =>
    this._documentService.GetPostList().subscribe(res => {
      this.documents = res;
    });
}
