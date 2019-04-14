"use strict";

jQuery(function ($) {
    // 获取登录状态===================================    
    var $tuichu = $(".tuichu");
    var $yidenglu = $(".yidenglu");
    if (window.localStorage.uname != '') {
        var name = window.localStorage.uname;
        $yidenglu.empty().attr("href", "javascript:void(0);").text(name);
        $tuichu.css("display", "block");
    } else if (window.localStorage.uname = '') {
        $yidenglu.empty().attr("href", "login.html").text("请登录");
    }
    $tuichu.on("click", function () {
        $tuichu.css("display", "none");
        window.localStorage.uname = '';
        window.localStorage.upwd = '';
        window.localStorage.Arr = '';
        $yidenglu.empty().attr("href", "login.html").text("请登录");
        $output.empty();
    });
    // =================================
    var $output = $(".output");
    var uname = window.localStorage.uname;
    var str;
    // console.log(uname);
    $.get("../api/shoppingcart2.php", { "uname": uname }, function (res2) {
        // console.log(res2);
        str = '';
        $.each(res2, function (idx, res3) {
            // console.log(res3.cartid);
            var getcartqty = res3.qty;
            // console.log(getcartqty);
            var gethadcartid = res3.cartid;

            render(gethadcartid, getcartqty);
        });
        setTimeout(function () {
            $output.append(str);
        }, 200);
    }, 'JSON');

    var $jian = $(".jian");
    var $jia = $(".jia");
    var ttotal = 0;
    $("table tbody").on("click", function (e) {
        if (e.target.className == "jia") {
            var zhi = Number($(e.target).prev().val());
            zhi += 1;
            $(e.target).prev().val(zhi);
            var trid = $(e.target).parent().parent()[0].dataset.id;
            // console.log(trid);
            // $("table tbody").empty();
            $.get("../api/jiajudge.php", { "uname": uname, "goodsid": trid }, function (res7) {
                // console.log(res7[0].cartid);
                // console.log(res7[0].qty);
                // console.log(res7);
                // render(res7[0].cartid,res7[0].qty);
                // $.get("../api/shoppingcart2.php",{"uname":uname},function(res2){
                //     // console.log(res2);
                //     str = '';
                //     $.each(res2,function(idx,res3){
                //         var getcartqty = res3.qty; 
                //         var gethadcartid = res3.cartid;
                //         render(gethadcartid,getcartqty);
                //         });
                //         setTimeout(function(){
                //                 $output.append(str);
                //                 console.log(str);
                //                 },1000)
                // },'JSON')
                // setTimeout(function(){
                // $output.append(str);
                // console.log(str);
                // },500)
                // $(".sptotal").text($(".xiaoji").html());
                // 
            }, 'JSON');

            var num = Number($(e.target).parent().prev().prev().children().children().html());
            console.log(num);
            var xiaoji = Number($(e.target).parent().next().next().children().children().html());
            console.log(xiaoji);
            var danjia = Number($(e.target).prev().val());
            var abc = (num * danjia).toFixed(1);
            $(e.target).parent().next().next().children().children().html(abc);
            // xiaoji.innertext = abc;

            // $(".sptotal").text($(".xiaoji").html());
            // 
            // setTimeout(function(){
            // hejiji();
            //     $(".sptotal").text(hhe);

            // },200)
            var hhh = hejiji();
            $(".sptotal").text(hhh);
        }
        if (e.target.className == "jian") {
            var zhi = Number($(e.target).next().val());
            zhi -= 1;
            $(e.target).next().val(zhi);
            var trid = $(e.target).parent().parent()[0].dataset.id;
            console.log(trid);
            $.get("../api/jianjudge.php", { "uname": uname, "goodsid": trid }, function (res8) {
                console.log(res8);
                // $(".sptotal").text($(".xiaoji").html());
            }, 'JSON');

            var num = Number($(e.target).next().val());
            console.log(num);
            var xiaoji = Number($(e.target).parent().next().next().children().children().html());
            console.log(xiaoji);
            var danjia = Number($(e.target).parent().prev().prev().children().children().html());
            var abc = (num * danjia).toFixed(1);

            $(e.target).parent().next().next().children().children().html(abc);
            // $(".sptotal").text($(".xiaoji").html());

            //             setTimeout(function(){
            // hejiji();
            //     $(".sptotal").text(hhe);

            // },200)
            // var hhh = hejiji();
            // $(".sptotal").text();
        }

        if (e.target.className == "soloDele") {
            $(e.target).parent().parent().remove();
            var trid = $(e.target).parent().parent()[0].dataset.id;
            $.get("../api/soloDele.php", { "uname": uname, "goodsid": trid }, function (res9) {
                console.log(res9);
            }, 'JSON');

            // $(".sptotal").text($(".xiaoji")+=$(".xiaoji").html());
            // $(".sptotal").text($(".xiaoji").html());
            // 
        }

        // $(".sptotal").text($(".xiaoji").html());
        // $(".sptotal").text($(".xiaoji")+=$(".xiaoji").html());

    });
    // ================empty===============
    // setTimeout(function(){
    // hejiji()
    //     $(".sptotal").text(he);

    // },200)


    // var hhe ;
    function hejiji() {
        // $(".sptotal").text($(".xiaoji").html());
        var arr = $('.output tr');
        he = 0;
        $.each(arr, function (index, item) {
            var a = $(item).children(".xiaoji").html();
            he += a;
            // hhe = Number(he);
        });
        // console.log(he);
        console.log(arr);
    }
    // hejiji();


    function render(gethadcartid, getcartqty) {
        str = '';
        $.get("../api/scartgetid.php", { "goodsid": gethadcartid }, function (res4) {
            // console.log(res4);
            ttotal += Number(getcartqty * res4[0].price);
            // $.each(res4,function(res5){
            // console.log(res5);
            // })
            str += '<tr data-id="' + res4[0].goodsid + '"><td><input type="checkbox" /></td><td><a href="#"><img src=".' + res4[0].picture + '" alt="" /></a><h3>' + res4[0].describe + '</h3></td><td><span>￥<em>' + res4[0].price + '</em></span></td><td>1234</td><td><span class="jian">-</span><input type="text" class="shuliang" value="' + getcartqty + '"/><span class="jia">+</span></td><td><span><em>50</em>kg</span></td><td><span>￥<em class="xiaoji">' + (getcartqty * res4[0].price).toFixed(1) + '</em></span></td><td>现货</td><td><a href="#">收藏</a><a href="#" class="soloDele">删除</a></td></tr>';
            // console.log(str);
        }, 'JSON');
        setTimeout(function () {
            // $(".sptotal").text(ttotal); 
            hejiji();
        }, 200);
    }
});