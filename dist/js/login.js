"use strict";function draw(o){var a=$("#canvas").width(),t=$("#canvas").height(),r=document.getElementById("canvas"),n=r.getContext("2d");r.width=a,r.height=t;for(var l="a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0".split(","),e=l.length,s=0;s<4;s++){var d=Math.floor(Math.random()*e),i=Math.random()-.5,c=l[d];o[s]=c.toLowerCase();var h=10+20*s,u=20+8*Math.random();n.font="bold 23px 微软雅黑",n.translate(h,u),n.rotate(i),n.fillStyle=randomColor(),n.fillText(c,0,0),n.rotate(-i),n.translate(-h,-u)}for(s=0;s<=5;s++)n.strokeStyle=randomColor(),n.beginPath(),n.moveTo(Math.random()*a,Math.random()*t),n.lineTo(Math.random()*a,Math.random()*t),n.stroke();for(s=0;s<=30;s++){n.strokeStyle=randomColor(),n.beginPath();h=Math.random()*a,u=Math.random()*t;n.moveTo(h,u),n.lineTo(h+1,u+1),n.stroke()}}function randomColor(){return"rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")"}jQuery(function(r){r(".sign1").addClass("signlight1");var n=r("#username2"),l=r("#password2"),e=r(".sryzm2"),o=r("#btnLogin2"),s=r(".signerr");n.focus(function(){s.text("请输入您的手机号").addClass("signerrblock")}),n.on("input",function(){/^1(3|4|5|7|8)\d{9}$/.test(n.val())?s.text(""):s.text("请输入正确的手机号").addClass("signerrblock").css({color:"red",display:"block"})}),l.focus(function(){s.text("请输入密码").addClass("signerrblock").css({color:"red",display:"block"})}),e.focus(function(){s.text("请输入验证码").addClass("signerrblock").css({color:"red",display:"block"})});var d=[];draw(d),r("#canvas").on("click",function(){draw(d),console.log(d)}),e.blur(function(){var o=r(".sign .input-val").val().toLowerCase(),a=d.join("");""==o?s.text(""):o==a?s.text("验证码输入正确").addClass("signerrblock").css({color:"green",display:"block"}):(s.text("验证码输入错误").addClass("signerrblock").css({color:"red",display:"block"}),r(".input-val").val(""))}),o.on("click",function(){s.text("").removeClass("signerrblock");var o=n.val(),a=l.val(),t=e.val();r.post("../api/login2.php",{uname:o,upwd:a},function(o){1==o?(location.href="../index.html",window.localStorage.uname=n.val(),window.localStorage.upwd=l.val()):(""==t?alert("请输入验证码"):(alert("用户名或密码错误"),e.val("")),draw(d))})})});