import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../../services/document.service';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminnewevent',
  templateUrl: './adminnewevent.component.html',
  styleUrls: ['./adminnewevent.component.css']
})
export class AdminneweventComponent implements OnInit {
    neweventform:FormGroup;
    constructor(private _documentService : DocumentService,private router : Router) { }

  ngOnInit() {
    this.neweventform = new FormGroup ({
        title: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        details: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        date: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        time: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        venue: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
      })
  }
  createnewevent(form):void{
    this._documentService.AddEvent(form.value)
    .then(()=>{
        form.reset();
        alert('Sucessfully added event!');
        this.router.navigate(['/adminpanel']);
    })

}

}
