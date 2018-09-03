$(document).ready(function(){
    /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
      为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
    getRem(720,100);
    bind_foces();
});
$(window).resize(function(){
    getRem(720,100)
    login_position();
});
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    var p = oWidth/pwidth*prem;
    (p >= 60) ? p = 60 : p = p;
    window.onresize_px = p;
    html.style.fontSize = p + "px";
}
function bind_foces(){
    $("input").bind("focus",function(){
        $('.bottom_navbar').css("display","none");
    }).bind('blur',function(){
        $('.bottom_navbar').css("display","block");
    });
}
function img_big(){
    alert("da");
}
function login_position(){
    var win_hei = window.innerHeight;
    if($(".user_login").length && $(".bg_div").length) {
        $(".user_login")[0].style.height = win_hei + "px";
        $(".bg_div")[0].style.height = win_hei + "px";
    }
}
function jump_index(url){
    window.location.href = url;
}
//JQ弹窗插件
function scs_alert(b){
    $.DialogByZ.Alert({Title: "提示", Content: b,BtnL:"确定",FunL:close_dialog()});
}
function scs_confirm(val,fun_a){
    $.DialogByZ.Confirm({Title: "", Content: val,FunL:fun_a,FunR:close_dialog()})
}
function close_dialog(){
    $.DialogByZ.Close();
}