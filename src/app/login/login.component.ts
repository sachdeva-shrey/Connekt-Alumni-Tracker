import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".slider").click(function(){
        // var f = $(".slider").width() / $('.slider').parent().width() * 100;
        // var ff= Math.round(f);
        // // alert(ff);
        if($(".slider").css("left")== 0 +"px")
        {
               $(".slider").css("left","65%");
               $(".slider").css("width","35%");
               $(".register-font").html("Are you an official?");
        }
        else
        {
               $(".slider").css("left","0%");
               $(".slider").css("width","65%");
               $(".register-font").html("Are you an alumnus?");          
        }
            });
                 
    }
}
