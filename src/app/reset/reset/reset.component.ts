import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

declare var $,login_position,jump_index,setCookie,scs_alert,delCookie:any;
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private apise: ApiService,private router: Router) { }

  ngOnInit() {
      login_position();
  }
  reset(password,c_password){
    this.apise.user_resets_pass(password,c_password).subscribe(t => {
      scs_alert("修改成功");
      delCookie("resets_user");
      this.router.navigate(['/login']);
    },error => {
        scs_alert(error.error.message);
    });
  }
}
