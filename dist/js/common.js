"use strict";function getRandomNum(t,e){return parseInt(Math.random()*(e-t+1)+t)}function getRandomColor(){return"rgb("+getRandomNum(0,255)+","+getRandomNum(0,255)+","+getRandomNum(0,255)+")"}var Element={getElement:function(t){var e=[];return t.forEach(function(t){1==t.nodeType&&e.push(t)}),e},getSonElement:function(t){return this.getElement(t.childNodes)},getNextElement:function(t){var e=t.nextSibling;return 1!=e.nodeType&&(e=e.nextSibling),e}};function getStyle(t,e){return window.getComputedStyle?window.getComputedStyle(t)[e]:t.currentStyle?t.currentStyle[e]:t.style[e]}function bind(t,e,n,o){t.addEventListener?t.addEventListener(e,n,o):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n}function bufferAnimation(i,t,e,a){var u=0;for(var n in t){u++,o(n,t[n])}function o(o,r){r="opacity"==o?100*r:r,clearInterval(i[o+"timer"]),i[o+"timer"]=setInterval(function(){var t=window.getComputedStyle(i)[o],e=t.match(/[a-z]+/);e=e?e[0]:"",t=parseFloat(t);var n=(r-(t="opacity"==o?100*t:t))/10;(t+=n=0<n?Math.ceil(n):Math.floor(n))==r&&(clearInterval(i[o+"timer"]),u--),t="opacity"==o?t/100:t,i.style[o]=t+e,0==u&&"function"==typeof a&&a()},e)}}var Cookie={setCookie:function(t,e,n,o){var r=t+"="+e;n&&(r+="; expires="+n.toUTCString()),o&&(r+="; path="+o),document.cookie=r},getCookie:function(n){var t=document.cookie.split("; "),o="";return t.forEach(function(t){var e=t.split("=");e[0]==n&&(o=e[1])}),o},removeCookie:function(t,e){var n=new Date;n.setDate(n.getDate()-1),this.setCookie(t,"",n,e)}};