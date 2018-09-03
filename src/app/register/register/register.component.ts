import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../api.service';

declare var $, login_position, scs_alert: any;

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private router: Router, private apise: ApiService) {
    }

    type: string;
    title: string;
    timeout: number;
    timeout_jsq: any;

    ngOnInit() {
        this.type = "";
        this.title = "注册类型"
        login_position();
    }

    again_type() {
        this.type = "";
        this.title = "注册类型"
    }

    choose_type(type) {
        this.type = type;
        (type == 'student') ? this.title = "学生注册" : this.title = "企业注册";
    }

    register(phone, code, password, c_password) {
        $(".loading").show();
        $(".input_div_div")[0].style.visibility = "collapse";
        this.apise.user_register(phone, code, password, c_password, this.type).subscribe(t => {
            scs_alert("注册成功");
            this.router.navigate(['/login']);
        }, error => {
            $(".loading").hide();
            $(".input_div_div")[0].style.visibility = "";
            scs_alert(error.error.message);
        })
    }

    get_code(phone) {
        this.apise.user_register_code(phone).subscribe(t => {
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

}
