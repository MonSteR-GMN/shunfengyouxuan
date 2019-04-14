"use strict";

jQuery(function ($) {
    var $uyzm2 = $(".sign .textbox2");
    var $yzmtip2 = $(".sign .yzmtip2");
    var show_num = [];
    var yzmStatus = false;
    draw(show_num);

    $("#canvas2").on('click', function () {
        draw(show_num);
    });

    $uyzm2.focus(function () {
        $yzmtip2.text("请输入验证码！");
    });
    // $uyzm2.on('input', function() {
    $uyzm2.blur(function () {
        var val = $(".sign .input-val").val().toLowerCase();
        var num = show_num.join("");
        if (val == '') {
            // $yzmtip2.text("请输入验证码！");
            yzmStatus = false;
            $yzmtip2.text("");
        } else if (val == num) {
            yzmStatus = true;
            $yzmtip2.text("正确").css("color", "#000");

            // $(".input-val").val('');
            // draw(show_num);
        } else {
            yzmStatus = false;
            $yzmtip2.text("错误").css("color", "red");
            $(".input-val").val('');
            // draw(show_num);
        }
    });
});

//生成并渲染出验证码图形
function draw(show_num) {
    var canvas_width = $('#canvas2').width();
    var canvas_height = $('#canvas2').height();
    var canvas2 = document.getElementById("canvas2"); //获取到canvas的对象，演员
    var context = canvas2.getContext("2d"); //获取到canvas画图的环境，演员表演的舞台
    canvas2.width = canvas_width;
    canvas2.height = canvas_height;
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