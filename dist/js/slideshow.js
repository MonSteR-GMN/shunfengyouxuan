"use strict";document.addEventListener("DOMContentLoaded",function(){var r=document.querySelector(".box"),t=r.children[0],e=t.children[0].cloneNode(!0);t.appendChild(e);var n,c=t.children[0].children[0],a=(document.querySelector(".prev"),document.querySelector(".next"),t.children.length),i=0;c.onload=function(){n=c.offsetWidth,t.style.width=n*a+"px",r.style.width=n+"px"};var d=setInterval(o,2e3);r.onmouseover=function(){clearInterval(d)},r.onmouseout=function(){d=setInterval(o,2e3)};var l=function(){var e=document.createElement("div");e.classList.add("page"),r.appendChild(e);for(var t=1;t<9;t++){var n=document.createElement("span");n.innerText=t,e.appendChild(n)}return e.children[0].classList.add("active"),e}();function o(){i++,s()}function s(){9==i?(t.style.left=0,i=1):-1==i&&(t.style.left=3*-n+"px",i=2);for(var e=0;e<8;e++)l.children[e].classList.remove("active");8==i?l.children[0].classList.add("active"):l.children[i].classList.add("active"),bufferAnimation(t,{left:-n*i},30)}l.onclick=function(e){"SPAN"==e.target.tagName&&(i=e.target.innerText-1,s())}});