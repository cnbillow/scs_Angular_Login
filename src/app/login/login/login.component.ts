import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment';
declare var $,login_position,jump_index,setCookie,scs_alert:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apise: ApiService) { }

  ngOnInit() {
      login_position();
  }
  back_to_history() {
      window.history.back();
  }
  user_login(phone,password){
      $(".loading").show();
      $(".input_div_div")[0].style.visibility = "collapse";
      this.apise.user_login(phone,password).subscribe(t => {
          setCookie("api_token",t.success.token);
          setCookie("role",t.role);
          var url =  environment.url.jump_index;
          jump_index(url);
      },error => {
          $(".loading").hide();
          $(".input_div_div")[0].style.visibility = "";
          scs_alert(error.error.message);
      })
}

}
