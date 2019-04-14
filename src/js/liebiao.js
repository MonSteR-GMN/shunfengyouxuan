jQuery(function($) {
    var $datalist = $(".datalist");
    var $page = $(".page");

    var currentPage = 1;
    var qty = 1;
    $.get("../api/liebiao.php", { 'currentPage': currentPage, 'qty': qty }, function(res) {
        var content = res.resArr;
        var str = '';
        $.each(content, function(i, res) {
            str += '<li>';
            str += '<a href="#"><img src=' + res.src + '></a>';
            str += '</li>';
        }, 'json')
        $datalist.append(str);

        $page.html("");
        var pageNum = Math.ceil(res.len / res.qty);
        for (var i = 1; i <= pageNum; i++) {
            var $span = $('<span/>');
            $span.text(i);
            $page.append($span);
        }
        // 第n页 ==> 索引n-1
        $($page.children("span").get(0)).addClass("active");
    }, 'JSON')

    //4.点击page，获取页码，发起请求
    $page.on("click", "span",function() {
        // currentPage = e.target.innerHTML;
        currentPage = $(this).html();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $datalist.empty();

        $.get("../api/liebiao.php", { 'currentPage': currentPage, 'qty': qty }, function(res) {
            console.log(res);
            var content = res.resArr;
            var str = '';
            $.each(content, function(i, res) {
                str += '<li>';
                str += '<a href="#"><img src=' + res.src + '></a>';
                str += '</li>';
            }, 'json')
            $datalist.append(str);

        }, 'JSON')
    })


    var $tuichu = $(".tuichu");
    var $yidenglu = $(".yidenglu");
    if(window.localStorage.uname!=''){
        var name = window.localStorage.uname;
        $yidenglu.empty().attr("href","javascript:void(0);").text(name);
        $tuichu.css("display","block");
    }else if(window.localStorage.uname=''){
        $yidenglu.empty().attr("href","./html/login.html").text("请登录");
    }
    $tuichu.on("click",function(){
        $tuichu.css("display","none");
        window.localStorage.uname = '';
        window.localStorage.upwd = '';
        window.localStorage.Arr = '';
        $yidenglu.empty().attr("href","./html/login.html").text("请登录");
    })
})