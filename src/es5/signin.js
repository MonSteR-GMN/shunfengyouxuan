"use strict";

jQuery(function ($) {
    var $uname = $("#username");
    var $upwd = $("#password");
    var $upwdcon = $("#confirm_pwd");
    var $tip = $(".sign .tip");
    var $pwdtip = $(".sign .pwdtip");
    var $pwdcontip = $(".sign .pwdcontip");
    var unameStatus = false;
    var pwdStatus = false;
    var pwdConStatus = false;
    var $allChecked = $(".sign span .checkbox");
    var checkedStatus = false;
    var $regBtn = $("#regBtn");

    // ===================================
    var $uyzm = $(".sign .textbox2");
    var $yzmtip = $(".sign .yzmtip");
    var show_num = [];
    var yzmStatus = false;
    draw(show_num);
    // ======================================
    $uname.val("");
    $upwd.val("");
    $upwdcon.val("");
    $uyzm.val("");
    // $allChecked.checked = false

    $uname.blur(function () {
        var $_uname = $(this).val();

        if (/^1(3|4|5|7|8)\d{9}$/.test($_uname)) {
            $.get("../api/signin1.php", { uname: $_uname }, function (res) {
                if (res) {
                    // $tip.text("该用户名可用").css("color","#58bc58");
                    $tip.text("");
                    unameStatus = true;
                } else {
                    $tip.text("该用户名已被注册").css("color", "red");
                    unameStatus = false;
                }
            });
        } else {
            $tip.text("请输入正确的手机号码").css("color", "red");
        }
        panduan();
    });

    $upwd.on("input", function () {
        var $_upwd = $upwd.val();
        //6-20位字符，可使用字母、数字、下划线.
        //不建议使用纯数字或字母组合.
        if (/^\w{6,20}$/.test($_upwd)) {
            pwdStatus = true;
            $pwdtip.text("6-20位字符，可使用字母、数字、下划线。不建议使用纯数字或字母组合。").css({ "color": "#000", "position": "absolute", "left": "445px", "top": "115px" });
        } else {
            pwdStatus = false;
            $pwdtip.text("密码只能为6-20位字母、数字下划线组合。").css({ "color": "red", "position": "absolute", "left": "445px", "top": "125px" });
        }
        panduan();
    });

    $upwdcon.focus(function () {
        $pwdcontip.text("请再次输入密码").css("color", "#000");
        $upwdcon.on("input", function () {
            $_upwdcon = $upwdcon.val();
            // $pwdcontip.text("请再次输入密码").css("color","#000");
            if ($_upwdcon == $upwd.val()) {
                $pwdcontip.text("");
                pwdConStatus = true;
            } else {
                $pwdcontip.text("两次输入不一致，请重新输入").css("color", "red");
                pwdConStatus = false;
            }
        });
        panduan();
    });
    // ==================================================
    $("#canvas").on('click', function () {
        draw(show_num);
        console.log(show_num);
    });

    $uyzm.focus(function () {
        $yzmtip.text("请输入验证码！");
    });
    // $uyzm.on('input', function() {
    $uyzm.blur(function () {
        var val = $(".sign .input-val").val().toLowerCase();
        var num = show_num.join("");
        if (val == '') {
            // $yzmtip.text("请输入验证码！");
            yzmStatus = false;
            $yzmtip.text("");
        } else if (val == num) {
            yzmStatus = true;
            $yzmtip.text("正确").css("color", "#000");

            // $(".input-val").val('');
            // draw(show_num);
        } else {
            yzmStatus = false;
            $yzmtip.text("错误").css("color", "red");
            $(".input-val").val('');
            // draw(show_num);
        }
        panduan();
    });

    // ===============================================
    // $(this).find(":checkbox")[0].checked = $(this).hasClass('selected') ? true : false;
    $allChecked.click(function () {
        if ($allChecked.is(':checked')) {
            // console.log(666);
            checkedStatus = true;
        } else {
            // console.log(777);
            checkedStatus = false;
        }
        panduan();
        // if()){
        //     checkedStatus = true;
        // }else if($allChecked.prop("checked",false)){
        //     checkedStatus = false;
        // }
    });

    $regBtn.on("click", function (e) {
        e.preventDefault();
        $.post("../api/signin2.php", { uname: $uname.val(), upwd: $upwd.val() }, function (res) {
            if (res == "登录成功") {
                location.href = "../index.html";
                window.localStorage.uname = $uname.val();
                window.localStorage.upwd = $upwd.val();
            }
        });
    });
    //判断regBtn
    function panduan() {
        // if(unameStatus && pwdStatus){
        if (unameStatus && pwdStatus && pwdConStatus && yzmStatus && checkedStatus) {
            $regBtn.attr("disabled", false);
        } else {
            $regBtn.attr("disabled", true);
        }
    }
    // //两种方法设置disabled属性
    // $('#areaSelect').attr("disabled",true);
    // $('#areaSelect').attr("disabled","disabled");
    // //三种方法移除disabled属性
    // $('#areaSelect').attr("disabled",false);
    // $('#areaSelect').removeAttr("disabled");
    // $('#areaSelect').attr("disabled","");
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

// ===============================================