"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var box = document.querySelector(".box");
    var ulBox = box.children[0];
    var firstLi = ulBox.children[0];
    var newLi = firstLi.cloneNode(true);
    ulBox.appendChild(newLi);
    var firstImg = ulBox.children[0].children[0];
    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");
    var len = ulBox.children.length;
    var idx = 0;
    var liWidth;

    firstImg.onload = function () {
        liWidth = firstImg.offsetWidth;
        ulBox.style.width = liWidth * len + 'px';
        box.style.width = liWidth + 'px';
    };
    var timer = setInterval(autoPlay, 2000);
    box.onmouseover = function () {
        clearInterval(timer);
    };
    box.onmouseout = function () {
        timer = setInterval(autoPlay, 2000);
    };

    var page = getPage();

    page.onclick = function (e) {
        if (e.target.tagName == "SPAN") {
            idx = e.target.innerText - 1;
            showPage();
        }
    };
    // page.onmouseenter = function(e) {
    //     if (e.target.tagName == ("SPAN")) {
    //         idx = e.target.innerText - 1;
    //         showPage();
    //     }
    //     page.onmouseleave = function(){
    //         clearInterval(timer);
    //     }
    // }

    //page
    function getPage() {
        var page = document.createElement("div");
        page.classList.add("page");
        box.appendChild(page);
        // console.log(box);
        for (var i = 1; i < 9; i++) {
            var span = document.createElement("span");
            span.innerText = i;
            page.appendChild(span);
        }
        page.children[0].classList.add("active");
        return page;
    }

    //封装轮播
    function autoPlay() {
        idx++;
        showPage();
    }
    function showPage() {
        if (idx == 9) {
            ulBox.style.left = 0;
            idx = 1;
        } else if (idx == -1) {
            ulBox.style.left = -liWidth * 3 + 'px';
            idx = 2;
        }
        //active
        for (var i = 0; i < 8; i++) {
            page.children[i].classList.remove("active");
        }
        if (idx == 8) {
            page.children[0].classList.add("active");
        } else {
            page.children[idx].classList.add("active");
        }
        bufferAnimation(ulBox, { left: -liWidth * idx }, 30);
    }
});