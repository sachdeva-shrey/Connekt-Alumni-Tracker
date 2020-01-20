import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: '../studentlogin/studentlogin.component.html',
  styleUrls: ['../studentlogin/studentlogin.component.css']
})

export class StudentloginComponent {
    constructor(private router : Router) { }

  verify(studentloginform){
    this.router.navigate(["adminpanel"]);
  }
  }
  