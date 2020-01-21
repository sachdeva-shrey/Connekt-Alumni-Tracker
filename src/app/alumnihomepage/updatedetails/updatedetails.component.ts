import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {
    updateform:FormGroup;
    constructor(private _documentService : DocumentService,private router : Router) { }

  ngOnInit() {
    this.updateform = new FormGroup ({
        fullname: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        regno: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        branch: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        year: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        phoneno: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        currentloc: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        workstatus: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        linkedinid: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        facebookid: new FormControl (null, [Validators.required, Validators.maxLength(200)])
      })
  }
  Updateprofile(form):void{
    this._documentService.Addupdateddetails(form.value)
        form.reset();
        alert('Sucessfully added event!');
        this.router.navigate(['/alumnipanel']);
}
}
