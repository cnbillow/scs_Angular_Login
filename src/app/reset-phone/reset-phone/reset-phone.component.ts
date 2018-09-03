import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import {environment} from "../../../environments/environment";

declare var $,login_position,jump_index,setCookie,scs_alert, getCookie:any;

@Component({
  selector: 'app-reset-phone',
  templateUrl: './reset-phone.component.html',
  styleUrls: ['./reset-phone.component.css']
})
export class ResetPhoneComponent implements OnInit {

  timeout: number;
  timeout_jsq: any;
  is_login: any;
  url: any;

  constructor(private router: Router,private apise: ApiService) { }


  ngOnInit() {
      this.url = environment.url.jump_index;
      var if_login = getCookie("api_token");
      if(if_login){
          this.is_login = true;
      }
      else{
          this.is_login = false;
      }
      login_position();
  }
  get_code(phone) {
      this.apise.user_resets_code(phone).subscribe(t => {
          this.get_code_btn_timeout();
      }, error => {
          //失败
          scs_alert(error.error.message);
      })
  }

  get_code_btn_timeout() {
      $(".get_code_btn").attr("disabled", "");
      this.timeout = 60;
      this.time_out();
      var _this = this;
      this.timeout_jsq = setInterval(function () {
          _this.time_out();
      }, 1000);
  }

  time_out() {
      this.timeout--;
      if (this.timeout <= 0) {
          $(".get_code_btn").removeAttr("disabled")
          $(".get_code_btn").html("获取验证码");
          clearInterval(this.timeout_jsq);
      }
      else {
          $(".get_code_btn").html(this.timeout);
      }
  }
  reset_phone(phone,code){
      this.apise.user_resets_mes(phone,code).subscribe(t => {
          setCookie("resets_user",phone);
          this.router.navigate(['/reset'])
      },error => {
          scs_alert(error.error.message);
      });
  }
  to_profile(){
      window.location.href = this.url + "/#/profile";
  }
}
