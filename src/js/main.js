jQuery(function($){
    var $goods1 = $(".goods1");
    $.get("./api/main.php",function(res){
        // var g1 = JSON.parse(res);
        // console.log(g1);
        // console.log(res);
        var content = res.data1;
        // console.log(content);
        var str1 = '';
        $.each(content,function(i,res){
            str1 += '<li class="gbtnp" data-id='+res.goodsid+'>';
            str1 += '<p class="desc"><a href="#" class="desc">'+ res.describe +'</a></p>';
            str1 += '<span>￥'+ res.price +'</span>';
            str1 += '<a href="#" class="pic"><img src='+ res.picture +'></a>';
            str1 += '<a href="#" class="gbtn">'+ res.gbtn +'</a>';
            str1 += '</li>';
        },'json')
        // console.log(str1);
        $(".goods1").append(str1);
        // console.log(".goods1");
    },'JSON')

    var $goods2_1 = $(".goods2_1");
    $.get("./api/main.php",function(res){
        var content = res.data2;
        var str1 = '';
        $.each(content,function(i,res){
            str1 += '<img src='+ res.picture +'>';
        },'json')
        $(".goods2_1").append(str1);
    },'JSON')

    var $goods4_2_1 = $(".goods4_2_1");
    $.get("./api/main.php",function(res){
        var content = res.data4;
        var str1 = '';
        $.each(content,function(i,res){
            str1 += '<li data-id='+res.goodsid+'>';
            str1 += '<a href="#"><img src='+ res.picture +'></a>';
            str1 += '<p class="desc"><a href="#" class="desc">'+ res.describe +'</a></p>';
            str1 += '<span>￥'+ res.price +'</span>';
            str1 += '<a href="#" class="gbtn2">'+ res.gbtn +'</a>';
            str1 += '</li>';
        },'json')
        $(".goods4_2_1").append(str1);
    },'JSON')

    var $goods5_2_1 = $(".goods5_2_1");
    $.get("./api/main.php",function(res){
        var content = res.data5;
        var str1 = '';
        $.each(content,function(i,res){
            str1 += '<li data-id='+res.goodsid+'>';
            str1 += '<a href="#"><img src='+ res.picture +'></a>';
            str1 += '<p class="desc"><a href="#" class="desc">'+ res.describe +'</a></p>';
            str1 += '<span>￥'+ res.price +'</span>';
            str1 += '<a href="#" class="gbtn2">'+ res.gbtn +'</a>';
            str1 += '</li>';
        },'json')
        $(".goods5_2_1").append(str1);
    },'JSON')

    var $goods6_2_1 = $(".goods6_2_1");
    $.get("./api/main.php",function(res){
        var content = res.data6;
        var str1 = '';
        $.each(content,function(i,res){
            str1 += '<li data-id='+res.goodsid+'>';
            str1 += '<a href="#"><img src='+ res.picture +'></a>';
            str1 += '<p class="desc"><a href="#" class="desc">'+ res.describe +'</a></p>';
            str1 += '<span>￥'+ res.price +'</span>';
            str1 += '<a href="#" class="gbtn2">'+ res.gbtn +'</a>';
            str1 += '</li>';
        },'json')
        $(".goods6_2_1").append(str1);
    },'JSON')

    var $goods7_2_1 = $(".goods7_2_1");
    $.get("./api/main.php",function(res){
        var content = res.data7;
        var str1 = '';
        $.each(content,function(i,res){
            str1 += '<li data-id='+res.goodsid+'>';
            str1 += '<a href="#"><img src='+ res.picture +'></a>';
            str1 += '<p class="desc"><a href="#" class="desc">'+ res.describe +'</a></p>';
            str1 += '<span>￥'+ res.price +'</span>';
            str1 += '<a href="#" class="gbtn2">'+ res.gbtn +'</a>';
            str1 += '</li>';
        },'json')
        $(".goods7_2_1").append(str1);
    },'JSON')

    var $goods11_1 = $(".goods11_1");
    $.get("./api/main.php",function(res){
        var content = res.data11;
        var str1 = '';
        $.each(content,function(i,res){
            str1 += '<li data-id='+res.goodsid+'>';
            // str1 += '<li class="box">';
            str1 += '<a href="#"><img src='+ res.picture +'></a>';
            str1 += '<p class="desc"><a href="#" class="desc">'+ res.describe +'</a></p>';
            str1 += '<span>￥'+ res.price +'</span>';
            str1 += '<a href="#" class="gbtn3">'+ res.gbtn +'</a>';
            str1 += '</li>';
        },'json')
        
        $(".goods11_1").append(str1);
    },'JSON')


    // 垂直轮播图============================================
    var $asidemid_slide = $(".asidemid_slide");
    $.get("./api/main.php",function(res){
        var k = res.data12;
        // console.log(k);
        var klen = k.length;
        var str2 = '';
        var $i = 0;
        $asidemid_slide.height((klen+2)*65);
        $.each(k,function(i,res){
            str2 += '<li><a class="asidepic" href="#" data-id="'+res.goodsid+'"><img src="'+res.picture+'" alt="" /></a><p class="descol"><a href="#">'+res.describe+'</a></p><p class="evalcol"><a href="#">'+res.eval+'</a></p></li>'
        },'json')
        $asidemid_slide.append(str2);
        $asidemid_slide.children().eq(0).clone(true).appendTo(".asidemid_slide");
        $asidemid_slide.children().eq(1).clone(true).appendTo(".asidemid_slide");
        // $asidemid_slide.children().eq(2).clone(true).appendTo(".asidemid_slide");

        var timer = setInterval(function(){
            $i += 2;
            if($i==10){
                $i=2;
                $asidemid_slide.css("top","0");
            }
            $asidemid_slide.stop().animate({"top":-($i/2*130)},3000)
        },9000)
    },'JSON')

// 获取登录状态===================================    
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

    // ============================
    setTimeout(function(){
        var $gbtn = $(".gbtn");
        $gbtn.css("display","none");
        $gbtn.parent().on("mouseover",function(){
            $(this).children(".gbtn").css("display","block");
        }).on("mouseout",function(){
            $gbtn.css("display","none");
        })

        // $gbtn.on("click",function(){
        //     $.get("./api/main.php",function(res){
        //         var content = res.data2;
        //         var strg = '';
        //         $.each(content,function(i,res){
        //             strg += '<img src='+ res.picture +'>';
        //         },'json')
        //         $(".goods2_1").append(strg);
        //     },'JSON')
        // })
        // 
        

        // 跳转详情页，点击存储id到localStorage，
        $(".goods1").on("click","li",function(){
            window.localStorage.guid = this.dataset.id;
            location.href = "../html/details.html";
        })
    },50)
    
    setTimeout(function(){
        var $gbtn2 = $(".gbtn2");
        $gbtn2.css("display","none");
        $gbtn2.parent().on("mouseover",function(){
            $(this).children(".gbtn2").css("display","block");
        }).on("mouseout",function(){
            $gbtn2.css("display","none");
        })
    },100)
    setTimeout(function(){
        var $gbtn3 = $(".gbtn3");
        $gbtn3.css("display","none");
        $gbtn3.parent().on("mouseover",function(){
            $(this).children(".gbtn3").css("display","block");
        }).on("mouseout",function(){
            $gbtn3.css("display","none");
        })
    },500)

























    
})