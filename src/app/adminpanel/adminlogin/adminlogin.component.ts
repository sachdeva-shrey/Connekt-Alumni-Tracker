import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: '../adminlogin/adminlogin.component.html',
  styleUrls: ['../adminlogin/adminlogin.component.css']
})

export class AdminloginComponent {
    constructor(private router : Router) { }

  verify(adminloginform){
    this.router.navigate(["adminpanel"]);
  }
  }
  