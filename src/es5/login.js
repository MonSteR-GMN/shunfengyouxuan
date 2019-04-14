"use strict";

jQuery(function ($) {
    $(".sign1").addClass("signlight1");
    // $(".sign2").on("click", function() {
    //     $(".signleft").css("display", "block");
    //     $(".signright").css("display", "none");
    //     $(".sign1").removeClass("signlight1");
    //     $(".sign2").addClass("signlight2");
    // })
    // $(".sign1").on("click", function() {
    //     $(".signleft").css("display", "none");
    //     $(".signright").css("display", "block");
    //     $(".sign1").addClass("signlight1");
    //     $(".sign2").removeClass("signlight2");
    // })
    // =========================================

    // // 登录
    // var $uname = $("#username");
    // // console.log($uname);
    // var $upwd = $("#password");
    // var $btnLogin = $("#btnLogin");

    // $btnLogin.on("click",function(){
    //     var $_uname = $uname.val();
    //     // console.log($_uname);
    //     var $_upwd = $upwd.val();

    //     $.post("../api/login1.php",{uname:$_uname,upwd:$_upwd},function (res){
    //         // console.log(res);
    //             if(res == 1){
    //                 location.href="../index.html";
    //             }else{
    //                  alert("用户名或密码错误");
    //             }           
    //     })
    // })

    // 登录2
    var $uname2 = $("#username2");
    var $upwd2 = $("#password2");
    var $sryzm2 = $(".sryzm2");
    var $btnLogin2 = $("#btnLogin2");
    var $signerr = $(".signerr");

    // var uname2Status = false;
    // var sryzm2Status = false;

    $uname2.focus(function () {
        $signerr.text("请输入您的手机号").addClass("signerrblock");
        // uname2Status = false;
    });
    $uname2.on("input", function () {
        // $signerr.text("请输入您的手机号");
        if (!/^1(3|4|5|7|8)\d{9}$/.test($uname2.val())) {
            $signerr.text("请输入正确的手机号").addClass("signerrblock").css({ "color": "red", "display": "block" });
            // uname2Status = false;
        } else {
            $signerr.text("");
            // uname2Status = true;
        }
        // panduan();
    });

    $upwd2.focus(function () {
        $signerr.text("请输入密码").addClass("signerrblock").css({ "color": "red", "display": "block" });
    });

    $sryzm2.focus(function () {
        $signerr.text("请输入验证码").addClass("signerrblock").css({ "color": "red", "display": "block" });
    });

    var show_num = [];
    draw(show_num);

    $("#canvas").on('click', function () {
        draw(show_num);
        console.log(show_num);
    });
    $sryzm2.blur(function () {
        var val = $(".sign .input-val").val().toLowerCase();
        var num = show_num.join("");
        if (val == '') {
            // $signerr.text("请输入验证码！");
            // sryzm2Status = false;
            $signerr.text("");
        } else if (val == num) {
            // sryzm2Status = true;
            $signerr.text("验证码输入正确").addClass("signerrblock").css({ "color": "green", "display": "block" });

            // $(".input-val").val('');
            // draw(show_num);
        } else {
            // sryzm2Status = false;
            $signerr.text("验证码输入错误").addClass("signerrblock").css({ "color": "red", "display": "block" });
            $(".input-val").val('');
            // draw(show_num);
        }
        // panduan();
    });

    $btnLogin2.on("click", function () {
        $signerr.text('').removeClass("signerrblock");
        var $_uname = $uname2.val();
        // console.log($_uname);
        var $_upwd = $upwd2.val();
        var $_sryzm2 = $sryzm2.val();

        $.post("../api/login2.php", { uname: $_uname, upwd: $_upwd }, function (res) {
            // console.log(res);
            if (res == 1) {
                // $.cookie($_uname, $_upwd); 
                location.href = "../index.html";
                window.localStorage.uname = $uname2.val();
                window.localStorage.upwd = $upwd2.val();
            } else if ($_sryzm2 == '') {
                alert("请输入验证码");
                draw(show_num);
            } else {
                alert("用户名或密码错误");
                $sryzm2.val('');
                draw(show_num);
            }
        });
    });

    // function panduan() {
    //     // if(unameStatus && pwdStatus){
    //     if ( uname2Status && sryzm2Status){
    //         $btnLogin2.attr("disabled", false);
    //     } else {
    //         $btnLogin2.attr("disabled", true);
    //     }
    // }
});
// ==============================================
//生成并渲染出验证码图形
function draw(show_num) {
    var canvas_width = $('#canvas').width();
    var canvas_height = $('#canvas').height();
    var canvas = document.getElementById("canvas"); //获取到canvas的对象，演员
    var context = canvas.getContext("2d"); //获取到canvas画图的环境，演员表演的舞台
    canvas.width = canvas_width;
    canvas.height = canvas_height;
    var sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
    var aCode = sCode.split(",");
    var aLength = aCode.length; //获取到数组的长度

    for (var i = 0; i < 4; i++) {
        //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
        var j = Math.floor(Math.random() * aLength); //获取到随机的索引值
        // var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
        var deg = Math.random() - 0.5; //产生一个随机弧度
        var txt = aCode[j]; //得到随机的一个内容
        show_num[i] = txt.toLowerCase();
        var x = 10 + i * 20; //文字在canvas上的x坐标
        var y = 20 + Math.random() * 8; //文字在canvas上的y坐标
        context.font = "bold 23px 微软雅黑";

        context.translate(x, y);
        context.rotate(deg);

        context.fillStyle = randomColor();
        context.fillText(txt, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);
    }
    for (var i = 0; i <= 5; i++) {
        //验证码上显示线条
        context.strokeStyle = randomColor();
        context.beginPath();
        context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.stroke();
    }
    for (var i = 0; i <= 30; i++) {
        //验证码上显示小点
        context.strokeStyle = randomColor();
        context.beginPath();
        var x = Math.random() * canvas_width;
        var y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
    }
}

//得到随机的颜色值
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

// =======