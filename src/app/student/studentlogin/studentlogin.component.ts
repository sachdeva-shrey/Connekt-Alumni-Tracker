import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DocumentService } from './../../services/document.service'
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login', 
  templateUrl: '../studentlogin/studentlogin.component.html',
  styleUrls: ['../studentlogin/studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
    addDocumentForm:FormGroup;
    loginform : FormGroup;
    constructor(private _documentService : DocumentService,private router : Router) { }
  
    ngOnInit() {
      this.addDocumentForm = new FormGroup ({
        firstname: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        lastname: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        regno: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        college: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        year: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        course: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        uemail: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        upassword: new FormControl (null, [Validators.required, Validators.maxLength(200)]),
        status : new FormControl (null)
      })
      this.loginform = new FormGroup({
          alumniemail : new FormControl(null),
          alumnipassword : new FormControl(null),
      })
      
        $(".slider").click(function(){
            if($(".slider").css("left")== 0 +"px")
            {
                $(".slider").css("left","65%");
                $(".slider").css("width","35%");
                $(".register-font").html("Already a user?");
            }
            else
            {
                $(".slider").css("left","0%");
                $(".slider").css("width","65%");
                $(".register-font").html("Not registered yet?");          
            }
        });
                                
    }
  
    submitDocument(form):void{
        this._documentService.AddDocument(form.value);
    }
 
    Signin(form):void {
        this._documentService.SignIn(form.value.alumniemail, form.value.alumnipassword);
    }
  
  }
  